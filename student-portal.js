
/* =========================================================
   QURAN SCIENCES ACADEMY
   STUDENT PORTAL — UNIFIED BILINGUAL VERSION
   ========================================================= */

"use strict";

const SUPABASE_URL = "https://kxaovcknyddctnqvrudi.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJr eGE ov..." .replaceAll(" ", "");

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const STUDENT_TRANSLATIONS = {
  ar: {
    academy: "أكاديمية القرآن الكريم",
    academyFull: "أكاديمية القرآن الكريم وعلومه",
    departments: "الأقسام العلمية",
    courses: "المقررات المتاحة",
    myCourses: "مقرراتي المسجلة",
    materials: "المواد التعليمية",
    exams: "الاختبارات",
    attendance: "الحضور والغياب",
    menu: "☰ القائمة",
    welcome: "مرحباً بك في الأكاديمية",
    welcomeDesc: "هذه لوحتك الخاصة لمتابعة مقرراتك الدراسية.",
    refresh: "تحديث البيانات",
    home: "الصفحة الرئيسية",
    logout: "تسجيل الخروج",
    loading: "جارٍ التحميل...",
    loadingData: "جارٍ تحميل بياناتك...",
    refreshing: "جارٍ التحديث...",
    noDepartments: "لا توجد أقسام متاحة حالياً.",
    noCourses: "لا توجد مقررات منشورة حالياً.",
    noEnrollments: "لم ترسل أي طلب تسجيل بعد.",
    noAttendance: "لا توجد سجلات حضور حتى الآن.",
    noMaterials: "سيتم عرض المواد التعليمية المعتمدة هنا.",
    noExams: "لا توجد بيانات اختبارات متاحة للعرض حالياً.",
    materialsDesc: "الملفات التعليمية الخاصة بالمقررات المقبولة في تسجيلك.",
    pending: "قيد الانتظار",
    approved: "مقبول",
    rejected: "مرفوض",
    present: "حاضر",
    absent: "غائب",
    late: "متأخر",
    course: "دورة",
    enrollmentRequested: "تم إرسال طلب التسجيل",
    requestEnrollment: "طلب التسجيل",
    enrollmentSuccess: "تم إرسال طلب التسجيل بنجاح.",
    enrollmentError: "تعذر إرسال طلب التسجيل:",
    dataError: "تعذر تحميل البيانات:",
    unknownError: "خطأ غير معروف",
    studentError: "حدث خطأ أثناء تحميل لوحة الطالب:",
    welcomeStudent: "الطالب",
    closeMenu: "إغلاق القائمة",
    studentNavigation: "قائمة تنقل الطالب"
  },

  en: {
    academy: "Quran Sciences Academy",
    academyFull: "Quran Sciences Academy",
    departments: "Academic Departments",
    courses: "Available Courses",
    myCourses: "My Enrolled Courses",
    materials: "Learning Materials",
    exams: "Examinations",
    attendance: "Attendance",
    menu: "☰ Menu",
    welcome: "Welcome to the Academy",
    welcomeDesc: "Your personal dashboard for following your courses.",
    refresh: "Refresh Data",
    home: "Home",
    logout: "Log Out",
    loading: "Loading...",
    loadingData: "Loading your data...",
    refreshing: "Refreshing...",
    noDepartments: "No departments are currently available.",
    noCourses: "No published courses are currently available.",
    noEnrollments: "You have not submitted any enrollment requests yet.",
    noAttendance: "There are no attendance records yet.",
    noMaterials: "Approved learning materials will appear here.",
    noExams: "No examination information is currently available.",
    materialsDesc: "Learning files for courses in which your enrollment has been approved.",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    present: "Present",
    absent: "Absent",
    late: "Late",
    course: "Course",
    enrollmentRequested: "Enrollment Requested",
    requestEnrollment: "Request Enrollment",
    enrollmentSuccess: "Your enrollment request was submitted successfully.",
    enrollmentError: "Could not submit enrollment request:",
    dataError: "Could not load data:",
    unknownError: "Unknown error",
    studentError: "Student dashboard error:",
    welcomeStudent: "Student",
    closeMenu: "Close menu",
    studentNavigation: "Student navigation"
  }
};

/* =========================================================
   GENERAL VARIABLES
   ========================================================= */

const $ = id => document.getElementById(id);

function getSavedLanguage() {
  try {
    return localStorage.getItem("academy-language") === "en"
      ? "en"
      : "ar";
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

function isArabic() {
  return currentLanguage === "ar";
}

function t(key) {
  return STUDENT_TRANSLATIONS[currentLanguage][key] ||
    STUDENT_TRANSLATIONS.ar[key] ||
    key;
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

function localizedValue(item, arabicKey, englishKey, fallbackKey) {
  if (isArabic()) {
    return item[arabicKey] || item[englishKey] || item[fallbackKey] || "";
  }

  return item[englishKey] || item[arabicKey] || item[fallbackKey] || "";
}

/* =========================================================
   MESSAGE AND BUTTON HELPERS
   ========================================================= */

function setMessage(message = "", isError = false) {
  const element = $("dashboardMessage");
  if (!element) return;

  element.textContent = message;
  element.hidden = !message;
  element.style.display = message ? "block" : "none";

  element.classList.toggle("error", isError);
  element.classList.toggle("info", !isError);
}

function setRefreshButton(loading) {
  const button = $("refreshButton");
  if (!button) return;

  button.disabled = loading;
  button.textContent = loading ? t("refreshing") : t("refresh");
}

/* =========================================================
   UNIFIED LANGUAGE SYSTEM
   ========================================================= */

function updateLanguage() {
  const direction = isArabic() ? "rtl" : "ltr";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = direction;

  document.body.dir = direction;

  document.body.classList.toggle("language-ar", isArabic());
  document.body.classList.toggle("language-en", !isArabic());

  try {
    localStorage.setItem("academy-language", currentLanguage);
  } catch (error) {
    console.warn("Could not save language preference:", error);
  }

  // Translate all static HTML elements.
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (key === "welcome" && currentProfile) return;

    if (STUDENT_TRANSLATIONS[currentLanguage][key]) {
      element.textContent = t(key);
    }
  });

  // Update language button.
  const toggle = $("languageToggle");

  if (toggle) {
    toggle.textContent = isArabic() ? "English" : "العربية";
  }

  // Update accessibility labels.
  $("studentSidebar")?.setAttribute("aria-label", t("studentNavigation"));
  $("sidebarCloseButton")?.setAttribute("aria-label", t("closeMenu"));
  $("studentSidebarOverlay")?.setAttribute("aria-label", t("closeMenu"));

  // Personalized welcome.
  if ($("welcomeTitle")) {
    $("welcomeTitle").textContent = currentProfile
      ? (isArabic()
          ? `مرحباً، ${currentProfile.full_name || t("welcomeStudent")}`
          : `Welcome, ${currentProfile.full_name || t("welcomeStudent")}`)
      : t("welcome");
  }

  // Translate initial loading placeholders.
  [
    "departmentsList",
    "coursesList",
    "enrollmentsList",
    "materialsList",
    "attendanceList"
  ].forEach(id => {
    const container = $(id);

    if (
      container &&
      container.children.length === 1 &&
      container.firstElementChild?.classList.contains("empty-state")
    ) {
      container.firstElementChild.textContent = t("loading");
    }
  });

  const materialsMessage = $("materialsMessage");

  if (materialsMessage && !studentData.courses.length) {
    materialsMessage.textContent = t("loading");
  }

  // Translate existing dynamic content.
  renderAll();
  setRefreshButton(false);
}

/* =========================================================
   SIDEBAR AND NAVIGATION
   ========================================================= */

function showStudentView(view) {
  document.querySelectorAll(".dashboard-section").forEach(section => {
    section.classList.remove("active");
  });

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
      <p class="empty-state">${escapeHTML(t("noDepartments"))}</p>
    `;
    return;
  }

  container.innerHTML = studentData.departments.map(department => {
    const name = localizedValue(
      department,
      "name_ar",
      "name_en",
      "name"
    );

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
  return localizedValue(
    course,
    "title_ar",
    "title_en",
    "title"
  );
}

function getCourseDescription(course) {
  return localizedValue(
    course,
    "description_ar",
    "description_en",
    "description"
  );
}

function renderCourses() {
  const container = $("coursesList");
  if (!container) return;

  if (!studentData.courses.length) {
    container.innerHTML = `
      <p class="empty-state">${escapeHTML(t("noCourses"))}</p>
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

        <p>${escapeHTML(getCourseDescription(course))}</p>

        <button
          type="button"
          class="enroll-button"
          data-course-id="${escapeHTML(course.id)}"
          ${requested ? "disabled" : ""}
        >
          ${requested ? escapeHTML(t("enrollmentRequested")) : escapeHTML(t("requestEnrollment"))}
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
      <p class="empty-state">${escapeHTML(t("noEnrollments"))}</p>
    `;
    return;
  }

  const statuses = {
    pending: t("pending"),
    approved: t("approved"),
    rejected: t("rejected")
  };

  container.innerHTML = studentData.enrollments.map(enrollment => {
    const course = studentData.courses.find(
      item => item.id === enrollment.course_id
    );

    return `
      <article class="dashboard-card">
        <h3>${escapeHTML(
          course ? getCourseTitle(course) : t("course")
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
    present: t("present"),
    absent: t("absent"),
    late: t("late")
  };

  if (container) {
    if (!records.length) {
      container.innerHTML = `
        <p class="empty-state">${escapeHTML(t("noAttendance"))}</p>
      `;
    } else {
      container.innerHTML = records.map(record => `
        <article class="attendance-record">
          <p>
            <strong>${escapeHTML(record.attendance_date || "")}</strong>
          </p>

          <p>${escapeHTML(
            labels[record.status] || record.status || ""
          )}</p>

          ${record.remarks
            ? `<p>${escapeHTML(localizedValue(
                record,
                "remarks_ar",
                "remarks_en",
                "remarks"
              ))}</p>`
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
      <div class="attendance-stat">
        <strong>${present}</strong>
        <span>${escapeHTML(t("present"))}</span>
      </div>

      <div class="attendance-stat">
        <strong>${absent}</strong>
        <span>${escapeHTML(t("absent"))}</span>
      </div>

      <div class="attendance-stat">
        <strong>${late}</strong>
        <span>${escapeHTML(t("late"))}</span>
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
    <p class="empty-state">${escapeHTML(t("noMaterials"))}</p>
  `;

  const description = $("materialsDescription");

  if (description) {
    description.textContent = t("materialsDesc");
  }
}

/* =========================================================
   EXAMINATIONS
   ========================================================= */

function renderExams() {
  const container = $("examsList");
  if (!container) return;

  container.innerHTML = `
    <p class="empty-state">${escapeHTML(t("noExams"))}</p>
  `;

  const message = $("examsMessage");

  if (message) {
    message.textContent = "";
  }
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
      `${t("dataError")} ${error.message || t("unknownError")}`,
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

    setMessage(t("enrollmentSuccess"));

    await loadStudentData();

  } catch (error) {
    console.error("Enrollment error:", error);

    setMessage(
      `${t("enrollmentError")} ${error.message || t("unknownError")}`,
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
    updateLanguage();

    setMessage(t("loadingData"));

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
      `${t("studentError")} ${error.message || t("unknownError")}`,
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
