/* =========================================================
   QURAN SCIENCES ACADEMY
   STUDENT PORTAL — BILINGUAL STUDENT DASHBOARD
   PART 1: CONFIGURATION, TRANSLATIONS AND CORE HELPERS
   ========================================================= */

"use strict";

/* =========================================================
   SUPABASE CONFIGURATION
   ========================================================= */

const SUPABASE_URL = "https://kxaovcknyddctnqvrudi.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_MDfn2oc-LWTXJqDtp7V7Lg__89pJGUQ";

/* Private storage buckets */
const LEARNING_MATERIALS_BUCKET = "academy-learning-materials";
const EXAM_FILES_BUCKET = "academy-exam-files";

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const STUDENT_TRANSLATIONS = {
  en: {
    academy: "Quran Sciences Academy",
    departments: "Departments",
    courses: "Available Courses",
    myCourses: "My Enrollments",
    materials: "Learning Materials",
    exams: "Examinations",
    attendance: "Attendance",
    menu: "Menu",
    welcome: "Welcome to your learning portal",
    welcomeDesc: "Continue your learning journey, access your courses and follow your progress.",
    refresh: "Refresh",
    home: "Home",
    logout: "Logout",
    loading: "Loading...",
    loadingData: "Loading your dashboard...",
    refreshing: "Refreshing...",
    noDepartments: "No departments are currently available.",
    noCourses: "No published courses are currently available.",
    noEnrollments: "You have not requested enrollment in any course yet.",
    noAttendance: "No attendance records are available yet.",
    noMaterials: "No learning materials are available for your approved courses yet.",
    noExams: "No published examinations are currently available for your approved courses.",
    materialsDesc: "Access learning resources for your approved courses.",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    present: "Present",
    absent: "Absent",
    late: "Late",
    course: "Course",
    enrollmentRequested: "Enrollment request submitted successfully.",
    requestEnrollment: "Request Enrollment",
    enrollmentSuccess: "Your enrollment request has been submitted.",
    enrollmentError: "Could not submit your enrollment request.",
    dataError: "Could not load dashboard data.",
    unknownError: "An unexpected error occurred.",
    studentError: "Your account is not registered as a student.",
    welcomeStudent: "Welcome",
    closeMenu: "Close menu",
    studentNavigation: "Student Navigation",
    pageTitle: "Student Dashboard",
    openMaterial: "Open Material",
    downloadMaterial: "Download PDF",
    materialDescription: "Learning resource",
    examInstructions: "Instructions",
    startExam: "Start Examination",
    continueExam: "Continue Examination",
    viewExam: "View Examination",
    submitExam: "Submit Examination",
    examStarted: "Examination started.",
    examSubmitted: "Examination submitted successfully.",
    examUnavailable: "This examination is not currently available.",
    examExpired: "The examination time has expired.",
    examQuestions: "Questions",
    examDuration: "Duration",
    minutes: "minutes",
    attempt: "Attempt",
    attempts: "Attempts",
    remainingAttempts: "Remaining attempts",
    examModeOnline: "Online examination",
    examModeFile: "File submission",
    examModeBoth: "Online and file submission",
    answerRequired: "Please answer the required questions.",
    selectAnswer: "Select an answer",
    writeAnswer: "Write your answer",
    uploadFile: "Upload your completed examination file",
    submitFile: "Submit File",
    submissionSuccess: "Your file was submitted successfully.",
    submissionError: "Could not submit your file.",
    examResults: "Examination Results",
    score: "Score",
    feedback: "Teacher Feedback",
    submitted: "Submitted",
    inProgress: "In progress",
    graded: "Graded",
    notStarted: "Not started",
    examTitle: "Examination",
    examDescription: "Description",
    startTime: "Start time",
    endTime: "End time",
    noQuestions: "No questions are available for this examination.",
    confirmSubmit: "Are you sure you want to submit this examination?",
    confirmFileSubmit: "Are you sure you want to submit this file?",
    selectFile: "Please select a PDF file.",
    fileTooLarge: "The selected file is too large.",
    invalidFile: "Please select a valid PDF file.",
    networkError: "A network error occurred. Please try again.",
    sessionExpired: "Your session has expired. Please sign in again.",
    attendanceSummary: "Attendance Summary",
    attendanceRecords: "Attendance Records",
    total: "Total",
    attendanceDate: "Date",
    remarks: "Remarks",
    noDescription: "No description provided.",
    courseDetails: "Course Details",
    status: "Status",
    teacher: "Teacher",
    back: "Back",
    cancel: "Cancel",
    saving: "Saving...",
    saved: "Saved",
    answerSaved: "Your answer was saved.",
    saveError: "Could not save your answer.",
    examNotFound: "Examination not found.",
    materialNotFound: "Learning material not found.",
    openError: "Could not open the requested file."
  },

  ar: {
    academy: "أكاديمية القرآن الكريم وعلومه",
    departments: "الأقسام",
    courses: "الدورات المتاحة",
    myCourses: "طلباتي في الدورات",
    materials: "المواد التعليمية",
    exams: "الاختبارات",
    attendance: "الحضور",
    menu: "القائمة",
    welcome: "مرحباً بك في بوابتك التعليمية",
    welcomeDesc: "واصل رحلتك التعليمية، وادخل إلى دوراتك، وتابع تقدمك.",
    refresh: "تحديث",
    home: "الرئيسية",
    logout: "تسجيل الخروج",
    loading: "جارٍ التحميل...",
    loadingData: "جارٍ تحميل لوحة التحكم...",
    refreshing: "جارٍ التحديث...",
    noDepartments: "لا توجد أقسام متاحة حالياً.",
    noCourses: "لا توجد دورات منشورة حالياً.",
    noEnrollments: "لم تطلب الالتحاق بأي دورة حتى الآن.",
    noAttendance: "لا توجد سجلات حضور حتى الآن.",
    noMaterials: "لا توجد مواد تعليمية متاحة لدوراتك المعتمدة حالياً.",
    noExams: "لا توجد اختبارات منشورة لدوراتك المعتمدة حالياً.",
    materialsDesc: "اطّلع على المواد التعليمية الخاصة بدوراتك المعتمدة.",
    pending: "قيد الانتظار",
    approved: "مقبول",
    rejected: "مرفوض",
    present: "حاضر",
    absent: "غائب",
    late: "متأخر",
    course: "الدورة",
    enrollmentRequested: "تم إرسال طلب الالتحاق بنجاح.",
    requestEnrollment: "طلب الالتحاق",
    enrollmentSuccess: "تم إرسال طلب الالتحاق بنجاح.",
    enrollmentError: "تعذر إرسال طلب الالتحاق.",
    dataError: "تعذر تحميل بيانات لوحة التحكم.",
    unknownError: "حدث خطأ غير متوقع.",
    studentError: "هذا الحساب غير مسجل كطالب.",
    welcomeStudent: "مرحباً",
    closeMenu: "إغلاق القائمة",
    studentNavigation: "قائمة الطالب",
    pageTitle: "لوحة الطالب",
    openMaterial: "فتح المادة",
    downloadMaterial: "تحميل ملف PDF",
    materialDescription: "مادة تعليمية",
    examInstructions: "التعليمات",
    startExam: "بدء الاختبار",
    continueExam: "متابعة الاختبار",
    viewExam: "عرض الاختبار",
    submitExam: "تسليم الاختبار",
    examStarted: "تم بدء الاختبار.",
    examSubmitted: "تم تسليم الاختبار بنجاح.",
    examUnavailable: "هذا الاختبار غير متاح حالياً.",
    examExpired: "انتهى وقت الاختبار.",
    examQuestions: "الأسئلة",
    examDuration: "المدة",
    minutes: "دقيقة",
    attempt: "المحاولة",
    attempts: "المحاولات",
    remainingAttempts: "المحاولات المتبقية",
    examModeOnline: "اختبار إلكتروني",
    examModeFile: "تسليم ملف",
    examModeBoth: "اختبار إلكتروني وتسليم ملف",
    answerRequired: "يرجى الإجابة عن الأسئلة المطلوبة.",
    selectAnswer: "اختر إجابة",
    writeAnswer: "اكتب إجابتك",
    uploadFile: "ارفع ملف الاختبار بعد إكماله",
    submitFile: "تسليم الملف",
    submissionSuccess: "تم تسليم الملف بنجاح.",
    submissionError: "تعذر تسليم الملف.",
    examResults: "نتائج الاختبارات",
    score: "الدرجة",
    feedback: "ملاحظات المعلم",
    submitted: "تم التسليم",
    inProgress: "قيد التنفيذ",
    graded: "تم التصحيح",
    notStarted: "لم يبدأ",
    examTitle: "الاختبار",
    examDescription: "الوصف",
    startTime: "وقت البداية",
    endTime: "وقت النهاية",
    noQuestions: "لا توجد أسئلة متاحة لهذا الاختبار.",
    confirmSubmit: "هل أنت متأكد من تسليم هذا الاختبار؟",
    confirmFileSubmit: "هل أنت متأكد من تسليم هذا الملف؟",
    selectFile: "يرجى اختيار ملف PDF.",
    fileTooLarge: "حجم الملف المحدد كبير جداً.",
    invalidFile: "يرجى اختيار ملف PDF صالح.",
    networkError: "حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.",
    sessionExpired: "انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.",
    attendanceSummary: "ملخص الحضور",
    attendanceRecords: "سجلات الحضور",
    total: "الإجمالي",
    attendanceDate: "التاريخ",
    remarks: "ملاحظات",
    noDescription: "لا يوجد وصف.",
    courseDetails: "تفاصيل الدورة",
    status: "الحالة",
    teacher: "المعلم",
    back: "رجوع",
    cancel: "إلغاء",
    saving: "جارٍ الحفظ...",
    saved: "تم الحفظ",
    answerSaved: "تم حفظ إجابتك.",
    saveError: "تعذر حفظ الإجابة.",
    examNotFound: "لم يتم العثور على الاختبار.",
    materialNotFound: "لم يتم العثور على المادة التعليمية.",
    openError: "تعذر فتح الملف المطلوب."
  }
};

/* =========================================================
   GLOBAL STUDENT STATE
   ========================================================= */

let currentLanguage = "ar";
let currentUser = null;
let currentProfile = null;
let academy = null;
let isLoading = false;

let studentData = {
  departments: [],
  courses: [],
  enrollments: [],
  attendance: [],
  materials: [],
  exams: []
};

let activeExam = null;
let activeExamAttempt = null;
let activeExamQuestions = [];
let examTimerInterval = null;
let isSubmittingExam = false;

/* =========================================================
   DOM HELPERS
   ========================================================= */

function $(id) {
  return document.getElementById(id);
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("academy-language");
    return saved === "en" ? "en" : "ar";
  } catch (error) {
    return "ar";
  }
}

function isArabic() {
  return currentLanguage === "ar";
}

function t(key) {
  const language = STUDENT_TRANSLATIONS[currentLanguage] ||
    STUDENT_TRANSLATIONS.ar;

  return language[key] ||
    STUDENT_TRANSLATIONS.en[key] ||
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

function localizedValue(arabicValue, englishValue) {
  const arabic = arabicValue ?? "";
  const english = englishValue ?? "";

  if (isArabic()) {
    return String(arabic || english || "");
  }

  return String(english || arabic || "");
}

function formatDate(value) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat(
    isArabic() ? "ar-SA" : "en-GB",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  ).format(date);
}

function formatDateTime(value) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat(
    isArabic() ? "ar-SA" : "en-GB",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  ).format(date);
}

/* =========================================================
   MESSAGE HELPERS
   ========================================================= */

function setMessage(message, type = "info") {
  const element = $("dashboardMessage");
  if (!element) return;

  if (!message) {
    element.textContent = "";
    element.className = "student-message";
    return;
  }

  element.textContent = message;
  element.className = `student-message show ${type}`;
}

function setSectionMessage(elementId, message, type = "info") {
  const element = $(elementId);
  if (!element) return;

  if (!message) {
    element.textContent = "";
    element.className = "student-message";
    return;
  }

  element.textContent = message;
  element.className = `student-message show ${type}`;
}

function setRefreshButton(loading) {
  const button = $("refreshButton");
  if (!button) return;

  button.disabled = loading;

  const label = button.querySelector("span");

  if (label) {
    label.textContent = loading ? t("refreshing") : t("refresh");
  }
}
/* =========================================================
   PART 2: LANGUAGE, NAVIGATION AND DASHBOARD RENDERING
   ========================================================= */

/* =========================================================
   LANGUAGE MANAGEMENT
   ========================================================= */

function updateLanguage() {
  currentLanguage = getSavedLanguage();

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic() ? "rtl" : "ltr";

  document.title = isArabic()
    ? "لوحة الطالب | أكاديمية القرآن الكريم وعلومه"
    : "Student Dashboard | Quran Sciences Academy";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (key && STUDENT_TRANSLATIONS[currentLanguage][key]) {
      element.textContent = t(key);
    }
  });

  const languageButton = $("languageToggle");

  if (languageButton) {
    languageButton.textContent = isArabic() ? "English" : "العربية";
    languageButton.setAttribute(
      "aria-label",
      isArabic() ? "Switch to English" : "التبديل إلى العربية"
    );
  }

  const closeButton = $("sidebarCloseButton");

  if (closeButton) {
    closeButton.setAttribute("aria-label", t("closeMenu"));
  }

  const menuButton = $("mobileMenuButton");

  if (menuButton) {
    menuButton.setAttribute(
      "aria-label",
      isArabic() ? "فتح القائمة" : "Open menu"
    );
  }

  const welcomeTitle = $("welcomeTitle");

  if (welcomeTitle) {
    const studentName = currentProfile?.full_name || "";

    welcomeTitle.textContent = studentName
      ? `${t("welcomeStudent")} ${studentName}`
      : t("welcome");
  }

  setRefreshButton(isLoading);

  renderAll();
}

/* =========================================================
   LANGUAGE SWITCH
   ========================================================= */

function toggleStudentLanguage() {
  currentLanguage = isArabic() ? "en" : "ar";

  try {
    localStorage.setItem("academy-language", currentLanguage);
  } catch (error) {
    console.warn("Could not save language preference:", error);
  }

  updateLanguage();
}

/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

function openMobileSidebar() {
  const sidebar = $("studentSidebar");
  const overlay = $("studentSidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMobileSidebar() {
  const sidebar = $("studentSidebar");
  const overlay = $("studentSidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

/* =========================================================
   STUDENT PAGE NAVIGATION
   ========================================================= */

function showStudentView(view) {
  const allowedViews = [
    "departments",
    "courses",
    "enrollments",
    "materials",
    "exams",
    "attendance"
  ];

  if (!allowedViews.includes(view)) return;

  document.querySelectorAll(".dashboard-section").forEach(section => {
    section.classList.remove("active");
  });

  document.querySelectorAll(".student-nav [data-view]").forEach(button => {
    button.classList.toggle(
      "active",
      button.getAttribute("data-view") === view
    );
  });

  const target = $(`view-${view}`);

  if (target) {
    target.classList.add("active");
  }

  closeMobileSidebar();
}

window.showStudentView = showStudentView;
window.closeMobileSidebar = closeMobileSidebar;

/* =========================================================
   DEPARTMENT HELPERS
   ========================================================= */

function getDepartmentName(department) {
  return localizedValue(
    department?.name_ar || department?.title_ar,
    department?.name_en || department?.title_en
  );
}

function getCourseName(course) {
  return localizedValue(
    course?.title_ar || course?.name_ar,
    course?.title_en || course?.name_en
  );
}

function getCourseDescription(course) {
  return localizedValue(
    course?.description_ar,
    course?.description_en
  );
}

function getDepartmentForCourse(course) {
  return studentData.departments.find(
    department => department.id === course.department_id
  );
}

/* =========================================================
   DEPARTMENT RENDERING
   ========================================================= */

function renderDepartments() {
  const container = $("departmentsList");
  if (!container) return;

  const departments = studentData.departments || [];

  if (!departments.length) {
    container.innerHTML = `
      <div class="student-empty-state">
        <span class="student-empty-icon">▦</span>
        ${escapeHTML(t("noDepartments"))}
      </div>
    `;
    return;
  }

  container.innerHTML = departments.map((department, index) => {
    const name = getDepartmentName(department);

    const courseCount = studentData.courses.filter(
      course => course.department_id === department.id
    ).length;

    return `
      <article class="student-item-card">
        <div class="student-card-icon">
          ${index % 2 === 0 ? "📖" : "✦"}
        </div>

        <h3>${escapeHTML(name)}</h3>

        <p>
          ${escapeHTML(
            isArabic()
              ? `${courseCount} دورة متاحة`
              : `${courseCount} available course(s)`
          )}
        </p>

        <div class="student-card-actions">
          <button
            type="button"
            class="student-button secondary"
            data-open-department="${escapeHTML(department.id)}">
            ${escapeHTML(isArabic() ? "عرض الدورات" : "View Courses")}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

/* =========================================================
   COURSE ENROLLMENT STATUS
   ========================================================= */

function getEnrollmentForCourse(courseId) {
  return studentData.enrollments.find(
    enrollment => enrollment.course_id === courseId
  );
}

function getEnrollmentStatusLabel(status) {
  const normalized = String(status || "pending").toLowerCase();

  if (normalized === "approved") return t("approved");
  if (normalized === "rejected") return t("rejected");

  return t("pending");
}

/* =========================================================
   COURSE RENDERING
   ========================================================= */

function renderCourses() {
  const container = $("coursesList");
  if (!container) return;

  const courses = studentData.courses || [];

  if (!courses.length) {
    container.innerHTML = `
      <div class="student-empty-state">
        <span class="student-empty-icon">📚</span>
        ${escapeHTML(t("noCourses"))}
      </div>
    `;
    return;
  }

  container.innerHTML = courses.map(course => {
    const title = getCourseName(course);
    const description = getCourseDescription(course);
    const enrollment = getEnrollmentForCourse(course.id);
    const department = getDepartmentForCourse(course);

    let actionHTML = "";

    if (!enrollment) {
      actionHTML = `
        <button
          type="button"
          class="student-button"
          data-enroll-course="${escapeHTML(course.id)}">
          ${escapeHTML(t("requestEnrollment"))}
        </button>
      `;
    } else {
      actionHTML = `
        <span class="student-status ${escapeHTML(
          enrollment.status || "pending"
        )}">
          ${escapeHTML(getEnrollmentStatusLabel(enrollment.status))}
        </span>
      `;
    }

    return `
      <article class="student-item-card">

        <div class="student-card-icon">📘</div>

        <h3>${escapeHTML(title)}</h3>

        <p>
          ${escapeHTML(
            department
              ? getDepartmentName(department)
              : t("course")
          )}
        </p>

        <p>
          ${escapeHTML(description || t("noDescription"))}
        </p>

        <div class="student-card-actions">
          ${actionHTML}
        </div>

      </article>
    `;
  }).join("");
}

/* =========================================================
   ENROLLMENT RENDERING
   ========================================================= */

function renderEnrollments() {
  const container = $("enrollmentsList");
  if (!container) return;

  const enrollments = studentData.enrollments || [];

  if (!enrollments.length) {
    container.innerHTML = `
      <div class="student-empty-state">
        <span class="student-empty-icon">✓</span>
        ${escapeHTML(t("noEnrollments"))}
      </div>
    `;
    return;
  }

  container.innerHTML = enrollments.map(enrollment => {
    const course = studentData.courses.find(
      item => item.id === enrollment.course_id
    );

    const courseName = course
      ? getCourseName(course)
      : t("course");

    const status = String(enrollment.status || "pending").toLowerCase();

    return `
      <article class="student-item-card">

        <div class="student-card-icon">🎓</div>

        <h3>${escapeHTML(courseName)}</h3>

        <p>${escapeHTML(t("status"))}</p>

        <span class="student-status ${escapeHTML(status)}">
          ${escapeHTML(getEnrollmentStatusLabel(status))}
        </span>

      </article>
    `;
  }).join("");
}

/* =========================================================
   ATTENDANCE RENDERING
   ========================================================= */

function renderAttendance() {
  const container = $("attendanceList");
  const summary = $("attendanceSummary");

  if (!container) return;

  const records = studentData.attendance || [];

  const counts = {
    present: 0,
    absent: 0,
    late: 0
  };

  records.forEach(record => {
    const status = String(record.status || "").toLowerCase();

    if (Object.prototype.hasOwnProperty.call(counts, status)) {
      counts[status]++;
    }
  });

  if (summary) {
    summary.innerHTML = `
      <div class="student-grid">

        <article class="student-item-card">
          <div class="student-card-icon">✓</div>
          <h3>${counts.present}</h3>
          <p>${escapeHTML(t("present"))}</p>
        </article>

        <article class="student-item-card">
          <div class="student-card-icon">✕</div>
          <h3>${counts.absent}</h3>
          <p>${escapeHTML(t("absent"))}</p>
        </article>

        <article class="student-item-card">
          <div class="student-card-icon">◷</div>
          <h3>${counts.late}</h3>
          <p>${escapeHTML(t("late"))}</p>
        </article>

        <article class="student-item-card">
          <div class="student-card-icon">▤</div>
          <h3>${records.length}</h3>
          <p>${escapeHTML(t("total"))}</p>
        </article>

      </div>
    `;
  }

  if (!records.length) {
    container.innerHTML = `
      <div class="student-empty-state">
        <span class="student-empty-icon">◷</span>
        ${escapeHTML(t("noAttendance"))}
      </div>
    `;
    return;
  }

  container.innerHTML = records.map(record => {
    const status = String(record.status || "").toLowerCase();

    const course = studentData.courses.find(
      item => item.id === record.course_id
    );

    const courseName = course
      ? getCourseName(course)
      : t("course");

    const statusLabel = {
      present: t("present"),
      absent: t("absent"),
      late: t("late")
    }[status] || status;

    return `
      <article class="student-item-card">

        <div class="student-card-icon">◷</div>

        <h3>${escapeHTML(courseName)}</h3>

        <p>
          ${escapeHTML(t("attendanceDate"))}:
          ${escapeHTML(formatDate(record.attendance_date))}
        </p>

        <span class="student-status ${escapeHTML(status)}">
          ${escapeHTML(statusLabel)}
        </span>

        ${
          record.notes
            ? `<p>${escapeHTML(record.notes)}</p>`
            : ""
        }

      </article>
    `;
  }).join("");
}

/* =========================================================
   RENDER ALL DASHBOARD SECTIONS
   ========================================================= */

function renderAll() {
  renderDepartments();
  renderCourses();
  renderEnrollments();
  renderMaterials();
  renderExams();
  renderAttendance();

  const year = $("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
                                        }
/* =========================================================
   PART 3: SUPABASE DATA LOADING AND LEARNING MATERIALS
   ========================================================= */

/* =========================================================
   APPROVED COURSE HELPERS
   ========================================================= */

function getApprovedCourseIds() {
  return studentData.enrollments
    .filter(enrollment =>
      String(enrollment.status || "").toLowerCase() === "approved"
    )
    .map(enrollment => enrollment.course_id)
    .filter(Boolean);
}

function getApprovedCourses() {
  const approvedIds = getApprovedCourseIds();

  return studentData.courses.filter(course =>
    approvedIds.includes(course.id)
  );
}

/* =========================================================
   LOAD STUDENT DASHBOARD DATA
   ========================================================= */

async function loadStudentData() {
  if (!academy || !currentUser) {
    throw new Error("Student session is unavailable.");
  }

  const [
    departmentsResult,
    coursesResult,
    enrollmentsResult,
    attendanceResult
  ] = await Promise.all([
    academy
      .from("departments")
      .select("*"),

    academy
      .from("courses")
      .select("*"),

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

  const errors = [
    departmentsResult.error,
    coursesResult.error,
    enrollmentsResult.error,
    attendanceResult.error
  ].filter(Boolean);

  if (errors.length) {
    console.error("Student data loading errors:", errors);
    throw errors[0];
  }

  studentData.departments = departmentsResult.data || [];

  studentData.courses = (coursesResult.data || []).filter(course => {
    return !course.status ||
      String(course.status).toLowerCase() === "published";
  });

  studentData.enrollments = enrollmentsResult.data || [];
  studentData.attendance = attendanceResult.data || [];

  await Promise.all([
    loadLearningMaterials(),
    loadStudentExams()
  ]);

  renderAll();
}

/* =========================================================
   LOAD LEARNING MATERIALS
   ========================================================= */

async function loadLearningMaterials() {
  studentData.materials = [];

  const approvedCourseIds = getApprovedCourseIds();

  if (!approvedCourseIds.length) {
    renderMaterials();
    return;
  }

  const { data, error } = await academy
    .from("learning_materials")
    .select("*")
    .in("course_id", approvedCourseIds)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Learning materials loading error:", error);

    setSectionMessage(
      "materialsMessage",
      t("dataError"),
      "error"
    );

    renderMaterials();
    return;
  }

  studentData.materials = data || [];

  renderMaterials();
}

/* =========================================================
   CREATE PRIVATE LEARNING MATERIAL URL
   ========================================================= */

async function getLearningMaterialUrl(material) {
  if (!material?.file_path) {
    throw new Error(t("materialNotFound"));
  }

  const { data, error } = await academy.storage
    .from(LEARNING_MATERIALS_BUCKET)
    .createSignedUrl(material.file_path, 300);

  if (error) {
    console.error("Learning material URL error:", error);
    throw error;
  }

  if (!data?.signedUrl) {
    throw new Error(t("openError"));
  }

  return data.signedUrl;
}

/* =========================================================
   OPEN LEARNING MATERIAL
   ========================================================= */

async function openLearningMaterial(materialId) {
  const material = studentData.materials.find(
    item => item.id === materialId
  );

  if (!material) {
    setSectionMessage(
      "materialsMessage",
      t("materialNotFound"),
      "error"
    );
    return;
  }

  try {
    setSectionMessage(
      "materialsMessage",
      t("loading"),
      "info"
    );

    const url = await getLearningMaterialUrl(material);

    window.open(url, "_blank", "noopener,noreferrer");

    setSectionMessage("materialsMessage", "", "info");
  } catch (error) {
    console.error("Could not open learning material:", error);

    setSectionMessage(
      "materialsMessage",
      error.message || t("openError"),
      "error"
    );
  }
}

/* =========================================================
   DOWNLOAD LEARNING MATERIAL
   ========================================================= */

async function downloadLearningMaterial(materialId) {
  const material = studentData.materials.find(
    item => item.id === materialId
  );

  if (!material) {
    setSectionMessage(
      "materialsMessage",
      t("materialNotFound"),
      "error"
    );
    return;
  }

  try {
    setSectionMessage(
      "materialsMessage",
      t("loading"),
      "info"
    );

    const url = await getLearningMaterialUrl(material);

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = material.file_name || "learning-material.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    setSectionMessage("materialsMessage", "", "info");
  } catch (error) {
    console.error("Could not download learning material:", error);

    setSectionMessage(
      "materialsMessage",
      error.message || t("openError"),
      "error"
    );
  }
}

/* =========================================================
   RENDER LEARNING MATERIALS
   ========================================================= */

function renderMaterials() {
  const container = $("materialsList");
  if (!container) return;

  const description = $("materialsDescription");

  if (description) {
    description.textContent = t("materialsDesc");
  }

  const materials = studentData.materials || [];

  if (!materials.length) {
    container.innerHTML = `
      <div class="student-empty-state">
        <span class="student-empty-icon">📚</span>
        ${escapeHTML(t("noMaterials"))}
      </div>
    `;
    return;
  }

  container.innerHTML = materials.map(material => {
    const title = localizedValue(
      material.title_ar,
      material.title_en
    );

    const course = studentData.courses.find(
      item => item.id === material.course_id
    );

    const courseName = course
      ? getCourseName(course)
      : t("course");

    const descriptionText = material.description || "";

    return `
      <article class="student-item-card">

        <div class="student-card-icon">📄</div>

        <h3>${escapeHTML(title)}</h3>

        <p>${escapeHTML(courseName)}</p>

        <p>
          ${escapeHTML(
            descriptionText || t("materialDescription")
          )}
        </p>

        <p>
          ${escapeHTML(formatDate(material.created_at))}
        </p>

        <div class="student-card-actions">

          <button
            type="button"
            class="student-button"
            data-open-material="${escapeHTML(material.id)}">
            ${escapeHTML(t("openMaterial"))}
          </button>

          <button
            type="button"
            class="student-button secondary"
            data-download-material="${escapeHTML(material.id)}">
            ${escapeHTML(t("downloadMaterial"))}
          </button>

        </div>

      </article>
    `;
  }).join("");
}

/* =========================================================
   ENROLLMENT REQUEST
   ========================================================= */

async function requestEnrollment(courseId) {
  if (!currentUser || !academy) return;

  const existing = getEnrollmentForCourse(courseId);

  if (existing) {
    setMessage(
      getEnrollmentStatusLabel(existing.status),
      "info"
    );
    return;
  }

  const button = document.querySelector(
    `[data-enroll-course="${CSS.escape(courseId)}"]`
  );

  if (button) {
    button.disabled = true;
    button.textContent = t("loading");
  }

  try {
    const { data, error } = await academy
      .from("enrollments")
      .insert({
        student_id: currentUser.id,
        course_id: courseId,
        status: "pending"
      })
      .select()
      .single();

    if (error) throw error;

    studentData.enrollments.push(data);

    renderCourses();
    renderEnrollments();

    setMessage(t("enrollmentSuccess"), "success");
  } catch (error) {
    console.error("Enrollment request error:", error);

    setMessage(
      error.message || t("enrollmentError"),
      "error"
    );

    if (button) {
      button.disabled = false;
      button.textContent = t("requestEnrollment");
    }
  }
}
/* =========================================================
   PART 4: STUDENT EXAMINATIONS
   SECTION A: LOAD AND DISPLAY EXAMS
   ========================================================= */

/* LOAD PUBLISHED EXAMINATIONS */

async function loadStudentExams() {
  studentData.exams = [];

  const approvedCourseIds = getApprovedCourseIds();

  if (!approvedCourseIds.length) {
    renderExams();
    return;
  }

  const { data, error } = await academy
    .from("exams")
    .select("*")
    .in("course_id", approvedCourseIds)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Examinations loading error:", error);

    setSectionMessage(
      "examsMessage",
      isArabic()
        ? "تعذر تحميل الاختبارات."
        : "Could not load examinations.",
      "error"
    );

    renderExams();
    return;
  }

  studentData.exams = data || [];
  renderExams();
}

/* EXAM DISPLAY HELPERS */

function getExamTitle(exam) {
  return localizedValue(exam.title_ar, exam.title_en);
}

function getExamDescription(exam) {
  return localizedValue(
    exam.description_ar,
    exam.description_en
  );
}

function getExamInstructions(exam) {
  return localizedValue(
    exam.instructions_ar,
    exam.instructions_en
  );
}

function getExamModeLabel(mode) {
  const labels = {
    online: isArabic() ? "اختبار إلكتروني" : "Online examination",
    file: isArabic() ? "تسليم ملف" : "File submission",
    both: isArabic() ? "إلكتروني أو ملف" : "Online or file"
  };

  return labels[mode] || mode || "";
}

function getExamAvailability(exam) {
  const now = Date.now();

  if (exam.start_time) {
    if (now < new Date(exam.start_time).getTime()) {
      return {
        available: false,
        message: isArabic()
          ? `يبدأ في ${formatDateTime(exam.start_time)}`
          : `Starts ${formatDateTime(exam.start_time)}`
      };
    }
  }

  if (exam.end_time) {
    if (now > new Date(exam.end_time).getTime()) {
      return {
        available: false,
        message: isArabic()
          ? "انتهى وقت الاختبار."
          : "The examination period has ended."
      };
    }
  }

  return {
    available: true,
    message: isArabic() ? "متاح" : "Available"
  };
}

/* RENDER EXAMINATIONS */

function renderExams() {
  const container = $("examsList");
  if (!container) return;

  const exams = studentData.exams || [];

  if (!exams.length) {
    container.innerHTML = `
      <div class="student-empty-state">
        <span class="student-empty-icon">📝</span>
        ${
          isArabic()
            ? "لا توجد اختبارات منشورة لمقرراتك المعتمدة حالياً."
            : "There are no published examinations for your approved courses."
        }
      </div>
    `;
    return;
  }

  container.innerHTML = exams.map(exam => {
    const course = studentData.courses.find(
      item => item.id === exam.course_id
    );

    const courseName = course
      ? getCourseName(course)
      : (isArabic() ? "المقرر" : "Course");

    const availability = getExamAvailability(exam);
    const mode = String(exam.exam_mode || "online").toLowerCase();

    const canStartOnline =
      availability.available &&
      (mode === "online" || mode === "both");

    const canSubmitFile =
      availability.available &&
      (mode === "file" || mode === "both");

    return `
      <article class="student-item-card">

        <div class="student-card-icon">📝</div>

        <h3>${escapeHTML(getExamTitle(exam))}</h3>

        <p>${escapeHTML(courseName)}</p>

        <p>${escapeHTML(getExamDescription(exam))}</p>

        <p>
          <strong>
            ${isArabic() ? "نوع الاختبار:" : "Exam mode:"}
          </strong>
          ${escapeHTML(getExamModeLabel(mode))}
        </p>

        <p>
          <strong>
            ${isArabic() ? "المدة:" : "Duration:"}
          </strong>
          ${
            exam.duration_minutes
              ? `${escapeHTML(String(exam.duration_minutes))} ${
                  isArabic() ? "دقيقة" : "minutes"
                }`
              : (isArabic() ? "غير محددة" : "Not specified")
          }
        </p>

        <p>
          <strong>
            ${isArabic() ? "الدرجة:" : "Maximum score:"}
          </strong>
          ${escapeHTML(String(exam.max_score ?? 100))}
        </p>

        <p class="${
          availability.available
            ? "student-status approved"
            : "student-status pending"
        }">
          ${escapeHTML(availability.message)}
        </p>

        <div class="student-card-actions">
          ${
            canStartOnline
              ? `
                <button
                  type="button"
                  class="student-button"
                  data-start-online-exam="${escapeHTML(exam.id)}">
                  ${isArabic() ? "بدء الاختبار" : "Start examination"}
                </button>
              `
              : ""
          }

          ${
            canSubmitFile
              ? `
                <button
                  type="button"
                  class="student-button secondary"
                  data-start-file-exam="${escapeHTML(exam.id)}">
                  ${isArabic() ? "تسليم ملف الاختبار" : "Submit examination file"}
                </button>
              `
              : ""
          }
        </div>

      </article>
    `;
  }).join("");
}

/* EXAM WORKSPACE */

function showExamWorkspace(content) {
  const workspace = $("examWorkspace");
  if (!workspace) return;

  workspace.innerHTML = content;
  workspace.hidden = false;

  workspace.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function closeExamWorkspace() {
  const workspace = $("examWorkspace");
  if (!workspace) return;

  workspace.innerHTML = "";
  workspace.hidden = true;

  activeExam = null;
  activeExamAttempt = null;
  activeExamQuestions = [];

  if (examTimerInterval) {
    clearInterval(examTimerInterval);
    examTimerInterval = null;
  }

  isSubmittingExam = false;
       }
/* =========================================================
   PART 4B: START EXAMINATIONS AND LOAD QUESTIONS
   ========================================================= */

/* LOAD EXAM QUESTIONS */

async function loadExamQuestions(examId) {
  const { data, error } = await academy
    .from("exam_questions")
    .select("*")
    .eq("exam_id", examId)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Exam questions loading error:", error);
    throw error;
  }

  return data || [];
}

/* FORMAT QUESTION OPTIONS */

function getQuestionOptions(question) {
  const options = question.options;

  if (!options) return [];

  if (Array.isArray(options)) return options;

  if (typeof options === "object") {
    return Object.entries(options).map(([key, value]) => ({
      key,
      value
    }));
  }

  return [];
}

/* QUESTION TEXT */

function getQuestionText(question) {
  return localizedValue(
    question.question_ar,
    question.question_en
  );
}

/* START ONLINE EXAM */

async function startOnlineExam(examId) {
  if (!academy || !currentUser || isSubmittingExam) return;

  const exam = studentData.exams.find(
    item => item.id === examId
  );

  if (!exam) {
    setSectionMessage("examsMessage", t("dataError"), "error");
    return;
  }

  const availability = getExamAvailability(exam);

  if (!availability.available) {
    setSectionMessage(
      "examsMessage",
      availability.message,
      "error"
    );
    return;
  }

  if (
    !["online", "both"].includes(
      String(exam.exam_mode || "online").toLowerCase()
    )
  ) {
    return;
  }

  try {
    isSubmittingExam = true;

    showExamWorkspace(`
      <div class="student-content-card">
        <p>${escapeHTML(t("loading"))}</p>
      </div>
    `);

    activeExam = exam;

    const { data, error } = await academy.rpc(
      "start_exam",
      { p_exam_id: exam.id }
    );

    if (error) throw error;

    const attempt = Array.isArray(data) ? data[0] : data;

    if (!attempt?.attempt_id) {
      throw new Error(
        isArabic()
          ? "تعذر إنشاء محاولة الاختبار."
          : "Could not create the examination attempt."
      );
    }

    activeExamAttempt = attempt;

    activeExamQuestions = await loadExamQuestions(exam.id);

    if (!activeExamQuestions.length) {
      throw new Error(
        isArabic()
          ? "لا توجد أسئلة في هذا الاختبار."
          : "This examination has no questions."
      );
    }

    renderOnlineExam();

  } catch (error) {
    console.error("Start examination error:", error);

    showExamWorkspace(`
      <div class="student-content-card">
        <p class="student-error">
          ${escapeHTML(error.message || t("dataError"))}
        </p>

        <button
          type="button"
          class="student-button secondary"
          data-close-exam>
          ${escapeHTML(t("close"))}
        </button>
      </div>
    `);

  } finally {
    isSubmittingExam = false;
  }
}

/* RENDER ONLINE EXAM WORKSPACE */

function renderOnlineExam() {
  const exam = activeExam;
  const attempt = activeExamAttempt;
  const questions = activeExamQuestions;

  if (!exam || !attempt || !questions.length) return;

  const instructions = getExamInstructions(exam);

  const questionsHTML = questions.map((question, index) => {
    const questionText = getQuestionText(question);
    const options = getQuestionOptions(question);

    let answerHTML = "";

    if (
      String(question.question_type).toLowerCase() ===
      "multiple_choice"
    ) {
      answerHTML = options.map((option, optionIndex) => {
        const optionValue =
          typeof option === "string"
            ? option
            : option.value ?? option.label ?? option.text ?? "";

        const optionKey =
          typeof option === "string"
            ? String(optionIndex)
            : option.key ?? String(optionIndex);

        return `
          <label class="student-answer-option">
            <input
              type="radio"
              name="question-${escapeHTML(question.id)}"
              value="${escapeHTML(String(optionKey))}"
              data-exam-question="${escapeHTML(question.id)}">

            <span>${escapeHTML(String(optionValue))}</span>
          </label>
        `;
      }).join("");

    } else {
      answerHTML = `
        <textarea
          class="student-answer-input"
          rows="4"
          placeholder="${
            isArabic() ? "اكتب إجابتك هنا..." : "Write your answer here..."
          }"
          data-exam-question="${escapeHTML(question.id)}"></textarea>
      `;
    }

    return `
      <article class="student-content-card exam-question-card">

        <h3>
          ${isArabic() ? "السؤال" : "Question"}
          ${index + 1}
        </h3>

        <p>${escapeHTML(questionText)}</p>

        <p class="student-question-points">
          ${escapeHTML(String(question.points ?? 1))}
          ${isArabic() ? "درجة" : "points"}
        </p>

        <div class="student-answer-area">
          ${answerHTML}
        </div>

        <button
          type="button"
          class="student-button secondary"
          data-save-question="${escapeHTML(question.id)}">
          ${isArabic() ? "حفظ الإجابة" : "Save answer"}
        </button>

      </article>
    `;
  }).join("");

  showExamWorkspace(`
    <div class="student-content-card">

      <h2>${escapeHTML(getExamTitle(exam))}</h2>

      ${
        instructions
          ? `<p>${escapeHTML(instructions)}</p>`
          : ""
      }

      <p>
        ${isArabic() ? "رقم المحاولة:" : "Attempt number:"}
        ${escapeHTML(String(attempt.attempt_number ?? 1))}
      </p>

      ${
        exam.duration_minutes
          ? `
            <p>
              ${isArabic() ? "المدة:" : "Duration:"}
              ${escapeHTML(String(exam.duration_minutes))}
              ${isArabic() ? "دقيقة" : "minutes"}
            </p>
          `
          : ""
      }

      <div id="examTimer" class="student-status approved"></div>

    </div>

    <div id="examQuestions">
      ${questionsHTML}
    </div>

    <div class="student-content-card">

      <button
        type="button"
        class="student-button"
        data-submit-online-exam>
        ${isArabic() ? "تسليم الاختبار النهائي" : "Submit examination"}
      </button>

      <button
        type="button"
        class="student-button secondary"
        data-close-exam>
        ${isArabic() ? "إغلاق" : "Close"}
      </button>

    </div>
  `);

  if (exam.duration_minutes) {
    startExamTimer(
      attempt.started_at,
      exam.duration_minutes
    );
  }
}
/* =========================================================
   PART 4C: TIMER, ANSWERS AND EXAM SUBMISSION
   ========================================================= */

/* EXAM TIMER */

function startExamTimer(startedAt, durationMinutes) {
  if (examTimerInterval) {
    clearInterval(examTimerInterval);
  }

  const startTime = new Date(startedAt).getTime();
  const endTime = startTime + durationMinutes * 60 * 1000;

  function updateTimer() {
    const remaining = Math.max(
      0,
      Math.floor((endTime - Date.now()) / 1000)
    );

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    const timer = $("examTimer");

    if (timer) {
      timer.textContent = isArabic()
        ? `الوقت المتبقي: ${minutes}:${String(seconds).padStart(2, "0")}`
        : `Time remaining: ${minutes}:${String(seconds).padStart(2, "0")}`;
    }

    if (remaining <= 0) {
      clearInterval(examTimerInterval);
      examTimerInterval = null;

      submitOnlineExam(true);
    }
  }

  updateTimer();
  examTimerInterval = setInterval(updateTimer, 1000);
}

/* SAVE EXAM ANSWER */

async function saveExamAnswer(questionId) {
  if (!activeExamAttempt || !academy) return;

  const question = activeExamQuestions.find(
    item => item.id === questionId
  );

  if (!question) return;

  const answerElement = document.querySelector(
    `[data-exam-question="${CSS.escape(questionId)}"]:checked`
  );

  const textElement = document.querySelector(
    `textarea[data-exam-question="${CSS.escape(questionId)}"]`
  );

  let answerText = null;
  let selectedOption = null;

  if (answerElement) {
    selectedOption = answerElement.value;
  } else if (textElement) {
    answerText = textElement.value.trim();
  }

  if (!answerElement && !textElement) {
    setSectionMessage(
      "examsMessage",
      isArabic() ? "تعذر العثور على الإجابة." : "Answer not found.",
      "error"
    );
    return;
  }

  try {
    const { error } = await academy.rpc(
      "save_exam_answer",
      {
        p_attempt_id: activeExamAttempt.attempt_id,
        p_question_id: questionId,
        p_answer_text: answerText,
        p_selected_option: selectedOption === null
          ? null
          : { value: selectedOption }
      }
    );

    if (error) throw error;

    setSectionMessage(
      "examsMessage",
      isArabic() ? "تم حفظ الإجابة." : "Answer saved.",
      "success"
    );

  } catch (error) {
    console.error("Saving answer error:", error);

    setSectionMessage(
      "examsMessage",
      error.message || t("dataError"),
      "error"
    );
  }
}

/* SAVE ALL ANSWERS */

async function saveAllExamAnswers() {
  for (const question of activeExamQuestions) {
    const questionId = question.id;

    const selected = document.querySelector(
      `[data-exam-question="${CSS.escape(questionId)}"]:checked`
    );

    const textInput = document.querySelector(
      `textarea[data-exam-question="${CSS.escape(questionId)}"]`
    );

    if (!selected && !textInput) continue;

    await saveExamAnswer(questionId);
  }
}

/* SUBMIT ONLINE EXAM */

async function submitOnlineExam(autoSubmit = false) {
  if (
    !activeExamAttempt ||
    !academy ||
    isSubmittingExam
  ) return;

  if (!autoSubmit) {
    const confirmed = window.confirm(
      isArabic()
        ? "هل أنت متأكد من تسليم الاختبار؟"
        : "Are you sure you want to submit this examination?"
    );

    if (!confirmed) return;
  }

  isSubmittingExam = true;

  try {
    await saveAllExamAnswers();

    const { data, error } = await academy.rpc(
      "submit_exam",
      {
        p_attempt_id: activeExamAttempt.attempt_id
      }
    );

    if (error) throw error;

    const result = Array.isArray(data) ? data[0] : data;

    if (examTimerInterval) {
      clearInterval(examTimerInterval);
      examTimerInterval = null;
    }

    const score = result?.final_score;

    const scoreText = score === null || score === undefined
      ? (isArabic() ? "بانتظار التصحيح" : "Awaiting grading")
      : `${score}`;

    showExamWorkspace(`
      <div class="student-content-card">

        <div class="student-card-icon">✅</div>

        <h2>
          ${isArabic() ? "تم تسليم الاختبار" : "Examination submitted"}
        </h2>

        <p>
          ${isArabic() ? "النتيجة:" : "Result:"}
          ${escapeHTML(scoreText)}
        </p>

        <p>
          ${
            result?.requires_teacher_grading
              ? (
                  isArabic()
                    ? "تحتاج بعض الإجابات إلى تصحيح المعلم."
                    : "Some answers require teacher grading."
                )
              : (
                  isArabic()
                    ? "تم تسجيل تسليم الاختبار."
                    : "Your examination submission has been recorded."
                )
          }
        </p>

        <button
          type="button"
          class="student-button"
          data-close-exam>
          ${isArabic() ? "إغلاق" : "Close"}
        </button>

      </div>
    `);

    await loadStudentExams();

  } catch (error) {
    console.error("Exam submission error:", error);

    setSectionMessage(
      "examsMessage",
      error.message || t("dataError"),
      "error"
    );

  } finally {
    isSubmittingExam = false;
  }
}

/* START FILE EXAM */

async function startFileExam(examId) {
  if (!academy || !currentUser || isSubmittingExam) return;

  const exam = studentData.exams.find(
    item => item.id === examId
  );

  if (!exam) return;

  const availability = getExamAvailability(exam);

  if (!availability.available) {
    setSectionMessage(
      "examsMessage",
      availability.message,
      "error"
    );
    return;
  }

  try {
    isSubmittingExam = true;
    activeExam = exam;

    showExamWorkspace(`
      <div class="student-content-card">
        <p>${escapeHTML(t("loading"))}</p>
      </div>
    `);

    const { data, error } = await academy.rpc(
      "start_file_exam",
      { p_exam_id: exam.id }
    );

    if (error) throw error;

    const attempt = Array.isArray(data) ? data[0] : data;

    if (!attempt?.attempt_id) {
      throw new Error(
        isArabic()
          ? "تعذر إنشاء محاولة الاختبار."
          : "Could not create the examination attempt."
      );
    }

    activeExamAttempt = attempt;

    renderFileExam();

  } catch (error) {
    console.error("File examination start error:", error);

    showExamWorkspace(`
      <div class="student-content-card">
        <p class="student-error">
          ${escapeHTML(error.message || t("dataError"))}
        </p>
      </div>
    `);

  } finally {
    isSubmittingExam = false;
  }
}

/* RENDER FILE EXAM */

function renderFileExam() {
  if (!activeExam || !activeExamAttempt) return;

  const exam = activeExam;

  showExamWorkspace(`
    <div class="student-content-card">

      <h2>${escapeHTML(getExamTitle(exam))}</h2>

      <p>${escapeHTML(getExamInstructions(exam))}</p>

      <p>
        ${
          isArabic()
            ? "افتح ملف الاختبار، ثم ارفع إجابتك بصيغة PDF."
            : "Open the examination paper, then upload your answers as a PDF."
        }
      </p>

      ${
        exam.exam_file_path
          ? `
            <button
              type="button"
              class="student-button secondary"
              data-open-exam-paper>
              ${isArabic() ? "فتح ورقة الاختبار" : "Open examination paper"}
            </button>
          `
          : ""
      }

      <label>
        ${isArabic() ? "ملف الإجابة PDF" : "Answer PDF"}
      </label>

      <input
        id="examSubmissionFile"
        type="file"
        accept="application/pdf,.pdf">

      <button
        type="button"
        class="student-button"
        data-submit-file-exam>
        ${isArabic() ? "تسليم الإجابة" : "Submit answers"}
      </button>

      <button
        type="button"
        class="student-button secondary"
        data-close-exam>
        ${isArabic() ? "إغلاق" : "Close"}
      </button>

    </div>
  `);
}

/* OPEN EXAMINATION PAPER */

async function openExamPaper() {
  if (!activeExam?.exam_file_path) return;

  try {
    const { data, error } = await academy.storage
      .from(EXAM_FILES_BUCKET)
      .createSignedUrl(activeExam.exam_file_path, 300);

    if (error) throw error;

    if (!data?.signedUrl) {
      throw new Error(t("openError"));
    }

    window.open(
      data.signedUrl,
      "_blank",
      "noopener,noreferrer"
    );

  } catch (error) {
    console.error("Opening exam paper error:", error);

    setSectionMessage(
      "examsMessage",
      error.message || t("openError"),
      "error"
    );
  }
}

/* SUBMIT FILE EXAM */

async function submitFileExam() {
  if (
    !activeExam ||
    !activeExamAttempt ||
    !academy ||
    isSubmittingExam
  ) return;

  const fileInput = $("examSubmissionFile");
  const file = fileInput?.files?.[0];

  if (!file) {
    setSectionMessage(
      "examsMessage",
      isArabic()
        ? "يرجى اختيار ملف PDF أولاً."
        : "Please select a PDF file first.",
      "error"
    );
    return;
  }

  if (
    file.type !== "application/pdf" &&
    !file.name.toLowerCase().endsWith(".pdf")
  ) {
    setSectionMessage(
      "examsMessage",
      isArabic()
        ? "يُسمح بملفات PDF فقط."
        : "Only PDF files are accepted.",
      "error"
    );
    return;
  }

  if (file.size > 50 * 1024 * 1024) {
    setSectionMessage(
      "examsMessage",
      isArabic()
        ? "حجم الملف يتجاوز الحد المسموح (50 ميجابايت)."
        : "The file exceeds the 50 MB limit.",
      "error"
    );
    return;
  }

  isSubmittingExam = true;

  try {
    const attemptId = activeExamAttempt.attempt_id;

    const filePath =
      `submissions/${attemptId}/${currentUser.id}.pdf`;

    const { error: uploadError } = await academy.storage
      .from(EXAM_FILES_BUCKET)
      .upload(filePath, file, {
        upsert: true,
        contentType: "application/pdf"
      });

    if (uploadError) throw uploadError;

    const { data, error } = await academy.rpc(
      "submit_file_exam",
      {
        p_attempt_id: attemptId,
        p_submission_file_path: filePath
      }
    );

    if (error) throw error;

    const result = Array.isArray(data) ? data[0] : data;

    showExamWorkspace(`
      <div class="student-content-card">

        <div class="student-card-icon">✅</div>

        <h2>
          ${isArabic() ? "تم تسليم ملف الاختبار" : "Examination file submitted"}
        </h2>

        <p>
          ${
            isArabic()
              ? "تم تسجيل ملف إجابتك بنجاح."
              : "Your answer file has been submitted successfully."
          }
        </p>

        <p>
          ${escapeHTML(String(result?.attempt_status || "submitted"))}
        </p>

        <button
          type="button"
          class="student-button"
          data-close-exam>
          ${isArabic() ? "إغلاق" : "Close"}
        </button>

      </div>
    `);

    await loadStudentExams();

  } catch (error) {
    console.error("File examination submission error:", error);

    setSectionMessage(
      "examsMessage",
      error.message || t("dataError"),
      "error"
    );

  } finally {
    isSubmittingExam = false;
  }
}

/* =========================================================
   PART 5: EVENTS, AUTHENTICATION AND INITIALIZATION
   ========================================================= */

/* =========================================================
   INITIALIZE SUPABASE
   ========================================================= */

function initializeSupabase() {
  if (academy) return academy;

  if (!window.supabase || !window.supabase.createClient) {
    throw new Error("Supabase library could not be loaded.");
  }

  academy = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  return academy;
}

/* =========================================================
   CHECK STUDENT SESSION
   ========================================================= */

async function checkStudentSession() {
  const { data, error } = await academy.auth.getUser();

  if (error || !data?.user) {
    window.location.replace("/login.html");
    return false;
  }

  currentUser = data.user;

  const { data: profile, error: profileError } = await academy
    .from("profiles")
    .select("*")
    .eq("id", currentUser.id)
    .single();

  if (profileError || !profile) {
    console.error("Student profile error:", profileError);
    throw new Error(
      isArabic()
        ? "تعذر تحميل الملف الشخصي."
        : "Could not load your profile."
    );
  }

  if (String(profile.role || "").toLowerCase() !== "student") {
    await academy.auth.signOut();
    window.location.replace("/login.html");
    return false;
  }

  currentProfile = profile;

  return true;
}

/* =========================================================
   REFRESH STUDENT DASHBOARD
   ========================================================= */

async function refreshStudentDashboard() {
  if (isLoading) return;

  try {
    isLoading = true;
    setRefreshButton(true);

    setMessage(
      isArabic() ? "جارٍ تحديث البيانات..." : "Refreshing data...",
      "info"
    );

    await loadStudentData();

    setMessage(
      isArabic() ? "تم تحديث البيانات." : "Dashboard refreshed.",
      "success"
    );

  } catch (error) {
    console.error("Dashboard refresh error:", error);

    setMessage(
      error.message || t("dataError"),
      "error"
    );

  } finally {
    isLoading = false;
    setRefreshButton(false);
  }
}

/* =========================================================
   STUDENT LOGOUT
   ========================================================= */

async function logoutStudent() {
  if (!academy) return;

  const confirmed = window.confirm(
    isArabic()
      ? "هل تريد تسجيل الخروج؟"
      : "Are you sure you want to log out?"
  );

  if (!confirmed) return;

  try {
    const { error } = await academy.auth.signOut();

    if (error) throw error;

    window.location.replace("/login.html");

  } catch (error) {
    console.error("Logout error:", error);

    setMessage(
      error.message ||
        (isArabic()
          ? "تعذر تسجيل الخروج."
          : "Could not log out."),
      "error"
    );
  }
}

/* =========================================================
   HANDLE DASHBOARD BUTTON ACTIONS
   ========================================================= */

async function handleStudentAction(event) {
  const target = event.target.closest("button");

  if (!target) return;

  /* ENROLLMENT REQUEST */

  if (target.dataset.enrollCourse) {
    await requestEnrollment(target.dataset.enrollCourse);
    return;
  }

  /* OPEN LEARNING MATERIAL */

  if (target.dataset.openMaterial) {
    await openLearningMaterial(target.dataset.openMaterial);
    return;
  }

  /* DOWNLOAD LEARNING MATERIAL */

  if (target.dataset.downloadMaterial) {
    await downloadLearningMaterial(target.dataset.downloadMaterial);
    return;
  }

  /* START ONLINE EXAM */

  if (target.dataset.startOnlineExam) {
    await startOnlineExam(target.dataset.startOnlineExam);
    return;
  }

  /* START FILE EXAM */

  if (target.dataset.startFileExam) {
    await startFileExam(target.dataset.startFileExam);
    return;
  }

  /* SAVE EXAM ANSWER */

  if (target.dataset.saveQuestion) {
    await saveExamAnswer(target.dataset.saveQuestion);
    return;
  }

  /* SUBMIT ONLINE EXAM */

  if (target.hasAttribute("data-submit-online-exam")) {
    await submitOnlineExam(false);
    return;
  }

  /* SUBMIT FILE EXAM */

  if (target.hasAttribute("data-submit-file-exam")) {
    await submitFileExam();
    return;
  }

  /* OPEN EXAM PAPER */

  if (target.hasAttribute("data-open-exam-paper")) {
    await openExamPaper();
    return;
  }

  /* CLOSE EXAM WORKSPACE */

  if (target.hasAttribute("data-close-exam")) {
    closeExamWorkspace();
    return;
  }
}

/* =========================================================
   CONNECT DASHBOARD EVENTS
   ========================================================= */

function connectStudentEvents() {
  document.addEventListener(
    "click",
    handleStudentAction
  );

  const languageButton = $("languageToggle");

  if (languageButton) {
    languageButton.addEventListener(
      "click",
      toggleStudentLanguage
    );
  }

  const refreshButton = $("refreshButton");

  if (refreshButton) {
    refreshButton.addEventListener(
      "click",
      refreshStudentDashboard
    );
  }

  const logoutButton = $("logoutButton");

  if (logoutButton) {
    logoutButton.addEventListener(
      "click",
      logoutStudent
    );
  }

  const mobileMenuButton = $("mobileMenuButton");

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener(
      "click",
      openMobileSidebar
    );
  }

  const sidebarCloseButton = $("sidebarCloseButton");

  if (sidebarCloseButton) {
    sidebarCloseButton.addEventListener(
      "click",
      closeMobileSidebar
    );
  }

  const sidebarOverlay = $("studentSidebarOverlay");

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener(
      "click",
      closeMobileSidebar
    );
  }

  /* SIDEBAR NAVIGATION */

  document.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", () => {
      showStudentView(button.dataset.view);
    });
  });
}

/* =========================================================
   INITIALIZE STUDENT PORTAL
   ========================================================= */

async function initializeStudentPortal() {
  try {
    initializeSupabase();

    currentLanguage = getSavedLanguage();

    updateLanguage();

    connectStudentEvents();

    setMessage(
      isArabic()
        ? "جارٍ تحميل لوحة الطالب..."
        : "Loading student dashboard...",
      "info"
    );

    const authenticated = await checkStudentSession();

    if (!authenticated) return;

    updateLanguage();

    await loadStudentData();

    setMessage(
      isArabic()
        ? "مرحباً بك في لوحة الطالب."
        : "Welcome to your student dashboard.",
      "success"
    );

    showStudentView("departments");

  } catch (error) {
    console.error("Student portal initialization error:", error);

    setMessage(
      error.message ||
        (isArabic()
          ? "حدث خطأ أثناء تحميل لوحة الطالب."
          : "An error occurred while loading the student dashboard."),
      "error"
    );
  }
}

/* =========================================================
   START WHEN PAGE IS READY
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeStudentPortal,
    { once: true }
  );
} else {
  initializeStudentPortal();
}

/* =========================================================
   END OF STUDENT PORTAL JAVASCRIPT
   ========================================================= */
   
