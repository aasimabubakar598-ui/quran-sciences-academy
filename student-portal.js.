
/* =========================================================
   QURAN SCIENCES ACADEMY
   STUDENT PORTAL — CORRECTED JAVASCRIPT
   ========================================================= */

const SUPABASE_URL = "https://kxaovcknyddctnqvrudi.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4YW92Y2tueWRkY3RucXZydWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5ODkxNjcsImV4cCI6MjEwOTU2NTE2N30.tYbKJreF9S44jH4YtQMzM67Rzlbhr0Ungw4H2x985iI";

const $ = id => document.getElementById(id);

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("academy-language");
    return saved === "en" ? "en" : "ar";
  } catch {
    return "ar";
  }
}

let currentLanguage = getSavedLanguage();
let currentUser = null;
let currentProfile = null;
let academy = null;

let studentData = {
  departments: [],
  courses: [],
  enrollments: [],
  attendance: []
};

/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function isArabic() {
  return currentLanguage === "ar";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function setMessage(message = "", isError = false) {
  const element = $("dashboardMessage");
  if (!element) return;

  element.textContent = message;
  element.hidden = !message;
  element.style.display = message ? "block" : "none";
  element.style.color = isError ? "#b42318" : "";
}

function setRefreshButton(loading) {
  const button = $("refreshButton");
  if (!button) return;

  button.disabled = loading;
  button.textContent = loading
    ? (isArabic() ? "جارٍ التحديث..." : "Refreshing...")
    : (isArabic() ? "تحديث البيانات" : "Refresh Data");
}

function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic() ? "rtl" : "ltr";

  document.body.dir = document.documentElement.dir;

  try {
    localStorage.setItem("academy-language", currentLanguage);
  } catch (error) {
    console.warn("Could not save language preference:", error);
  }

  const toggle = $("languageToggle");

  if (toggle) {
    toggle.textContent = isArabic() ? "English" : "العربية";
  }

  if (currentProfile && $("welcomeTitle")) {
    $("welcomeTitle").textContent = isArabic()
      ? `مرحباً، ${currentProfile.full_name || "الطالب"}`
      : `Welcome, ${currentProfile.full_name || "Student"}`;
  }

  renderAll();
}

/* =========================================================
   SIDEBAR AND NAVIGATION
   ========================================================= */

function showStudentView(view) {
  document.querySelectorAll(".dashboard-section").forEach(section => {
    section.classList.remove("active");
  });

  // Correct HTML IDs: view-departments, view-courses, etc.
  const target = document.getElementById(`view-${view}`);

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.view === view
    );
  });

  closeMobileSidebar();
}

window.showStudentView = showStudentView;

function openMobileSidebar() {
  $("studentSidebar")?.classList.add("open");
  $("studentSidebarOverlay")?.classList.add("visible");
  document.body.classList.add("menu-open");
  $("mobileMenuButton")?.setAttribute("aria-expanded", "true");
}

function closeMobileSidebar() {
  $("studentSidebar")?.classList.remove("open");
  $("studentSidebarOverlay")?.classList.remove("visible");
  document.body.classList.remove("menu-open");
  $("mobileMenuButton")?.setAttribute("aria-expanded", "false");
}

/* =========================================================
   DEPARTMENTS
   ========================================================= */

function renderDepartments() {
  const container = $("departmentsList");
  if (!container) return;

  if (!studentData.departments.length) {
    container.innerHTML = `
      <p>${isArabic()
        ? "لا توجد أقسام متاحة حالياً."
        : "No departments available."}</p>
    `;
    return;
  }

  container.innerHTML = studentData.departments.map(department => {
    const name = isArabic()
      ? department.name_ar || department.name_en || department.name
      : department.name_en || department.name_ar || department.name;

    return `
      <article class="dashboard-card">
        <h3>${escapeHTML(name)}</h3>
      </article>
    `;
  }).join("");
}

/* =========================================================
   COURSES
   ========================================================= */

function getCourseTitle(course) {
  return isArabic()
    ? course.title_ar || course.title_en || course.title || ""
    : course.title_en || course.title_ar || course.title || "";
}

function renderCourses() {
  const container = $("coursesList");
  if (!container) return;

  if (!studentData.courses.length) {
    container.innerHTML = `
      <p>${isArabic()
        ? "لا توجد دورات منشورة حالياً."
        : "No published courses available."}</p>
    `;
    return;
  }

  container.innerHTML = studentData.courses.map(course => {
    const requested = studentData.enrollments.some(
      enrollment => enrollment.course_id === course.id
    );

    return `
      <article class="dashboard-card">
        <h3>${escapeHTML(getCourseTitle(course))}</h3>

        <p>${escapeHTML(course.description || "")}</p>

        <button
          type="button"
          class="enroll-button"
          data-course-id="${escapeHTML(course.id)}"
          ${requested ? "disabled" : ""}
        >
          ${requested
            ? (isArabic() ? "تم إرسال طلب التسجيل" : "Enrollment Requested")
            : (isArabic() ? "طلب التسجيل" : "Request Enrollment")}
        </button>
      </article>
    `;
  }).join("");
}

/* =========================================================
   ENROLLMENTS
   ========================================================= */

function renderEnrollments() {
  const container = $("enrollmentsList");
  if (!container) return;

  if (!studentData.enrollments.length) {
    container.innerHTML = `
      <p>${isArabic()
        ? "لم ترسل أي طلب تسجيل بعد."
        : "You have no enrollment requests yet."}</p>
    `;
    return;
  }

  const statuses = {
    pending: isArabic() ? "قيد الانتظار" : "Pending",
    approved: isArabic() ? "مقبول" : "Approved",
    rejected: isArabic() ? "مرفوض" : "Rejected"
  };

  container.innerHTML = studentData.enrollments.map(enrollment => {
    const course = studentData.courses.find(
      item => item.id === enrollment.course_id
    );

    return `
      <article class="dashboard-card">
        <h3>${escapeHTML(
          course
            ? getCourseTitle(course)
            : (isArabic() ? "دورة" : "Course")
        )}</h3>

        <p>${escapeHTML(
          statuses[enrollment.status] || enrollment.status || ""
        )}</p>
      </article>
    `;
  }).join("");
}

/* =========================================================
   ATTENDANCE
   ========================================================= */

function renderAttendance() {
  const container = $("attendanceList");
  const summary = $("attendanceSummary");

  const records = studentData.attendance;

  const labels = {
    present: isArabic() ? "حاضر" : "Present",
    absent: isArabic() ? "غائب" : "Absent",
    late: isArabic() ? "متأخر" : "Late"
  };

  if (container) {
    if (!records.length) {
      container.innerHTML = `
        <p>${isArabic()
          ? "لا توجد سجلات حضور حتى الآن."
          : "No attendance records yet."}</p>
      `;
    } else {
      container.innerHTML = records.map(record => `
        <article class="dashboard-card">
          <p>
            <strong>${escapeHTML(record.attendance_date || "")}</strong>
          </p>

          <p>${escapeHTML(
            labels[record.status] || record.status || ""
          )}</p>

          ${record.remarks
            ? `<p>${escapeHTML(record.remarks)}</p>`
            : ""}
        </article>
      `).join("");
    }
  }

  if (summary) {
    const present = records.filter(
      record => record.status === "present"
    ).length;

    const absent = records.filter(
      record => record.status === "absent"
    ).length;

    const late = records.filter(
      record => record.status === "late"
    ).length;

    summary.innerHTML = `
      <div class="dashboard-card">
        <strong>${isArabic() ? "حاضر" : "Present"}</strong>
        <p>${present}</p>
      </div>

      <div class="dashboard-card">
        <strong>${isArabic() ? "غائب" : "Absent"}</strong>
        <p>${absent}</p>
      </div>

      <div class="dashboard-card">
        <strong>${isArabic() ? "متأخر" : "Late"}</strong>
        <p>${late}</p>
      </div>
    `;
  }
}

/* =========================================================
   LEARNING MATERIALS
   ========================================================= */

function renderMaterials() {
  const container = $("materialsList");
  if (!container) return;

  container.innerHTML = `
    <p>${isArabic()
      ? "سيتم عرض المواد التعليمية المعتمدة هنا."
      : "Approved learning materials will appear here."}</p>
  `;
}

/* =========================================================
   EXAMINATIONS
   ========================================================= */

function renderExams() {
  const container = $("examsList");
  if (!container) return;

  container.innerHTML = `
    <p>${isArabic()
      ? "لا توجد بيانات اختبارات متاحة للعرض حالياً."
      : "No examination information is available here yet."}</p>
  `;

  const message = $("examsMessage");
  if (message) message.textContent = "";
}

/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {
  renderDepartments();
  renderCourses();
  renderEnrollments();
  renderAttendance();
  renderMaterials();
  renderExams();

  const year = $("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

/* =========================================================
   LOAD STUDENT DATA
   ========================================================= */

async function loadStudentData() {
  if (!currentUser || !academy) return;

  setRefreshButton(true);
  setMessage("");

  try {
    const results = await Promise.all([
      academy.from("departments").select("*"),

      academy.from("courses").select("*"),

      academy
        .from("enrollments")
        .select("*")
        .eq("student_id", currentUser.id),

      academy
        .from("attendance")
        .select("*")
        .eq("student_id", currentUser.id)
        .order("attendance_date", { ascending: false })
    ]);

    const failedResult = results.find(result => result.error);

    if (failedResult) {
      throw failedResult.error;
    }

    const [
      departmentsResult,
      coursesResult,
      enrollmentsResult,
      attendanceResult
    ] = results;

    studentData.departments = departmentsResult.data || [];

    const courses = coursesResult.data || [];

    studentData.courses = courses.filter(course =>
      !("status" in course) || course.status === "published"
    );

    studentData.enrollments = enrollmentsResult.data || [];
    studentData.attendance = attendanceResult.data || [];

    renderAll();

  } catch (error) {
    console.error("Student data error:", error);

    setMessage(
      isArabic()
        ? `تعذر تحميل البيانات: ${error.message || "خطأ غير معروف"}`
        : `Could not load data: ${error.message || "Unknown error"}`,
      true
    );

  } finally {
    setRefreshButton(false);
  }
}

/* =========================================================
   ENROLLMENT REQUEST
   ========================================================= */

async function requestEnrollment(courseId) {
  if (!currentUser || !academy || !courseId) return;

  const alreadyRequested = studentData.enrollments.some(
    enrollment => enrollment.course_id === courseId
  );

  if (alreadyRequested) return;

  try {
    const { error } = await academy
      .from("enrollments")
      .insert({
        student_id: currentUser.id,
        course_id: courseId,
        status: "pending"
      });

    if (error) throw error;

    setMessage(
      isArabic()
        ? "تم إرسال طلب التسجيل بنجاح."
        : "Your enrollment request was submitted."
    );

    await loadStudentData();

  } catch (error) {
    console.error("Enrollment error:", error);

    setMessage(
      isArabic()
        ? `تعذر إرسال الطلب: ${error.message || "خطأ غير معروف"}`
        : `Could not submit request: ${error.message || "Unknown error"}`,
      true
    );
  }
}

/* =========================================================
   LOGOUT
   ========================================================= */

async function logoutStudent() {
  if (!academy) return;

  const { error } = await academy.auth.signOut();

  if (error) {
    setMessage(error.message, true);
    return;
  }

  window.location.href = "/login.html";
}

/* =========================================================
   INITIALIZE STUDENT PORTAL
   ========================================================= */

async function initializeStudentPortal() {
  try {
    setMessage(
      isArabic()
        ? "جارٍ تحميل بياناتك..."
        : "Loading your data..."
    );

    if (!window.supabase || !window.supabase.createClient) {
      throw new Error(
        "Supabase library did not load. Please check your internet connection."
      );
    }

    academy = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );

    const { data, error } = await academy.auth.getSession();

    if (error) throw error;

    if (!data.session) {
      window.location.href = "/login.html";
      return;
    }

    currentUser = data.session.user;

    const { data: profile, error: profileError } = await academy
      .from("profiles")
      .select("id, full_name, role")
      .eq("id", currentUser.id)
      .single();

    if (profileError) throw profileError;

    if (!profile || profile.role !== "student") {
      await academy.auth.signOut();
      window.location.href = "/login.html";
      return;
    }

    currentProfile = profile;

    updateLanguage();

    await loadStudentData();

  } catch (error) {
    console.error("Student portal initialization error:", error);

    setMessage(
      isArabic()
        ? `حدث خطأ أثناء تحميل لوحة الطالب: ${error.message || "خطأ غير معروف"}`
        : `Student dashboard error: ${error.message || "Unknown error"}`,
      true
    );
  }
}

/* =========================================================
   EVENT LISTENERS
   ========================================================= */

document.addEventListener("click", event => {
  const enrollButton = event.target.closest(".enroll-button");

  if (enrollButton) {
    requestEnrollment(enrollButton.dataset.courseId);
  }
});

$("refreshButton")?.addEventListener("click", loadStudentData);

$("logoutButton")?.addEventListener("click", logoutStudent);

$("languageToggle")?.addEventListener("click", () => {
  currentLanguage = isArabic() ? "en" : "ar";
  updateLanguage();
});

$("mobileMenuButton")?.addEventListener("click", openMobileSidebar);

$("sidebarCloseButton")?.addEventListener("click", closeMobileSidebar);

$("studentSidebarOverlay")?.addEventListener("click", closeMobileSidebar);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMobileSidebar();
  }
});

/* =========================================================
   START APPLICATION
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeStudentPortal
  );
} else {
  initializeStudentPortal();
}
