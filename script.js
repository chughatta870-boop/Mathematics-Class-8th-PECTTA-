/* =========================================================
   PEC Class 8 Mathematics — Test & Result Card System
   Pure vanilla JS. No backend. Data persists in localStorage.
   ========================================================= */

/* ---------- 1. Syllabus & Question Bank ---------- */
const CHAPTERS = [
  { id: 1,  name: "Real Numbers" },
  { id: 2,  name: "Squares and Square Roots" },
  { id: 3,  name: "Cubes and Cube Roots" },
  { id: 4,  name: "Ratio and Proportion" },
  { id: 5,  name: "Financial Arithmetic" },
  { id: 6,  name: "Algebraic Expressions" },
  { id: 7,  name: "Algebraic Formulas and Applications" },
  { id: 8,  name: "Linear Equations" },
  { id: 9,  name: "Fundamentals of Geometry" },
  { id: 10, name: "Practical Geometry" },
  { id: 11, name: "Circumference, Area and Volume" },
  { id: 12, name: "Information Handling" },
];

// q: question text, o: 4 options, a: index of correct option (0-3), c: chapter id
const QUESTION_BANK = [
  // Chapter 1 - Real Numbers
  {c:1,q:"Which of the following is an irrational number?",o:["4/5","\u221A2","0.75","-3"],a:1},
  {c:1,q:"The set of rational and irrational numbers together is called:",o:["Whole numbers","Real numbers","Natural numbers","Integers"],a:1},
  {c:1,q:"\u221A9 is a:",o:["Rational number","Irrational number","Complex number","None of these"],a:0},
  {c:1,q:"Which of these is a terminating decimal?",o:["1/3","1/4","1/7","2/3"],a:1},
  {c:1,q:"\u03C0 (pi) is a/an:",o:["Rational number","Irrational number","Integer","Natural number"],a:1},
  {c:1,q:"The reciprocal of -5 is:",o:["5","-1/5","1/5","-5"],a:1},
  {c:1,q:"Every integer is also a:",o:["Natural number","Whole number","Rational number","Irrational number"],a:2},
  {c:1,q:"\u221A2 = 1.414213... is an example of:",o:["Terminating decimal","Repeating decimal","Non-terminating, non-repeating decimal","Whole number"],a:2},
  // Chapter 2 - Squares and Square Roots
  {c:2,q:"The square of 12 is:",o:["144","124","121","169"],a:0},
  {c:2,q:"\u221A144 = ?",o:["11","12","13","14"],a:1},
  {c:2,q:"Which of these is a perfect square?",o:["50","64","80","90"],a:1},
  {c:2,q:"The square root of 0.09 is:",o:["0.3","0.03","3","0.9"],a:0},
  {c:2,q:"15\u00B2 = ?",o:["225","235","215","205"],a:0},
  {c:2,q:"\u221A225 = ?",o:["13","14","15","16"],a:2},
  {c:2,q:"Which number when squared gives 196?",o:["13","14","15","16"],a:1},
  {c:2,q:"The square of an odd number is always:",o:["Even","Odd","Zero","Negative"],a:1},
  // Chapter 3 - Cubes and Cube Roots
  {c:3,q:"The cube of 3 is:",o:["9","27","6","81"],a:1},
  {c:3,q:"\u221B64 = ?",o:["2","4","6","8"],a:1},
  {c:3,q:"5\u00B3 = ?",o:["15","25","125","225"],a:2},
  {c:3,q:"\u221B27 = ?",o:["2","3","4","9"],a:1},
  {c:3,q:"Which of these is a perfect cube?",o:["16","27","36","48"],a:1},
  {c:3,q:"The cube of -2 is:",o:["8","-8","6","-6"],a:1},
  {c:3,q:"\u221B1 = ?",o:["0","1","-1","10"],a:1},
  {c:3,q:"10\u00B3 = ?",o:["100","1000","10000","30"],a:1},
  // Chapter 4 - Ratio and Proportion
  {c:4,q:"The ratio of 20 to 25 in simplest form is:",o:["4:5","5:4","2:5","5:2"],a:0},
  {c:4,q:"If a:b = 2:3 and b:c = 3:4, then a:c = ?",o:["1:2","2:3","1:4","2:4"],a:0},
  {c:4,q:"Two quantities are in direct proportion if:",o:["One increases, the other decreases","Both increase or decrease together","Both stay the same","None of these"],a:1},
  {c:4,q:"If 4 books cost Rs. 200, the cost of 6 books is:",o:["Rs. 250","Rs. 300","Rs. 350","Rs. 400"],a:1},
  {c:4,q:"The third proportional to 4 and 8 is:",o:["12","16","18","20"],a:1},
  {c:4,q:"In inverse proportion, when one quantity increases, the other:",o:["Increases","Decreases","Remains same","Doubles"],a:1},
  {c:4,q:"The ratio 3:6 is equivalent to:",o:["1:3","1:2","2:1","3:1"],a:1},
  {c:4,q:"Continued proportion of 2, 4, 8 means:",o:["2:4 = 4:8","2:4 = 8:4","4:2 = 8:4","None of these"],a:0},
  // Chapter 5 - Financial Arithmetic
  {c:5,q:"Profit is calculated as:",o:["CP - SP","SP - CP","SP + CP","SP / CP"],a:1},
  {c:5,q:"If CP = Rs. 500 and SP = Rs. 600, the profit is:",o:["Rs. 100","Rs. 1100","Rs. 50","Rs. 600"],a:0},
  {c:5,q:"The formula for Simple Interest is:",o:["P\u00D7R\u00D7T/100","P+R+T","P\u00D7R\u00D7T","P/R\u00D7T"],a:0},
  {c:5,q:"A discount is always given on the:",o:["Cost price","Marked price","Selling price","Profit"],a:1},
  {c:5,q:"Zakat is generally calculated at the rate of:",o:["2.5%","5%","10%","7.5%"],a:0},
  {c:5,q:"If Principal = Rs. 1000, Rate = 10%, Time = 2 years, Simple Interest = ?",o:["Rs. 100","Rs. 200","Rs. 150","Rs. 1200"],a:1},
  {c:5,q:"A loss occurs when:",o:["SP > CP","SP < CP","SP = CP","None of these"],a:1},
  {c:5,q:"Percentage means:",o:["Per hundred","Per thousand","Per ten","Per unit"],a:0},
  // Chapter 6 - Algebraic Expressions
  {c:6,q:"The degree of the expression 3x\u00B2+2x+1 is:",o:["0","1","2","3"],a:2},
  {c:6,q:"Simplify: 3x + 5x = ?",o:["8x","15x","2x","8x\u00B2"],a:0},
  {c:6,q:"A term with no variable is called a:",o:["Variable term","Constant term","Like term","Coefficient"],a:1},
  {c:6,q:"The coefficient of x in 7x is:",o:["1","7","x","0"],a:1},
  {c:6,q:"2x + 3x - x = ?",o:["4x","5x","6x","3x"],a:0},
  {c:6,q:"An expression with exactly two terms is called a:",o:["Monomial","Binomial","Trinomial","Constant"],a:1},
  {c:6,q:"(3x\u00B2) \u00D7 (2x) = ?",o:["6x\u00B2","6x\u00B3","5x\u00B3","5x\u00B2"],a:1},
  {c:6,q:"Like terms must have the same:",o:["Coefficient","Variable and power","Sign","Constant"],a:1},
  // Chapter 7 - Algebraic Formulas
  {c:7,q:"(a+b)\u00B2 = ?",o:["a\u00B2+b\u00B2","a\u00B2+2ab+b\u00B2","a\u00B2-2ab+b\u00B2","a\u00B2-b\u00B2"],a:1},
  {c:7,q:"(a-b)\u00B2 = ?",o:["a\u00B2+2ab+b\u00B2","a\u00B2-2ab+b\u00B2","a\u00B2-b\u00B2","a\u00B2+b\u00B2"],a:1},
  {c:7,q:"a\u00B2 - b\u00B2 = ?",o:["(a+b)(a-b)","(a-b)\u00B2","(a+b)\u00B2","a+b"],a:0},
  {c:7,q:"(x+3)\u00B2 = ?",o:["x\u00B2+6x+9","x\u00B2+9","x\u00B2+3x+9","x\u00B2-6x+9"],a:0},
  {c:7,q:"If a=2, b=3, then a\u00B2+2ab+b\u00B2 = ?",o:["25","13","5","10"],a:0},
  {c:7,q:"Using the formula, (5+2)\u00B2 = ?",o:["49","39","29","59"],a:0},
  {c:7,q:"a\u00B2+b\u00B2 = (a+b)\u00B2 - ?",o:["ab","2ab","a-b","2a+2b"],a:1},
  {c:7,q:"(a+b)(a-b) simplifies to:",o:["a\u00B2-b\u00B2","a\u00B2+b\u00B2","2ab","a\u00B2b\u00B2"],a:0},
  // Chapter 8 - Linear Equations
  {c:8,q:"Solve: x + 5 = 12, x = ?",o:["5","6","7","8"],a:2},
  {c:8,q:"Solve: 2x = 10, x = ?",o:["5","10","2","20"],a:0},
  {c:8,q:"A linear equation in one variable has degree:",o:["0","1","2","3"],a:1},
  {c:8,q:"Solve: 3x - 4 = 11, x = ?",o:["3","4","5","6"],a:2},
  {c:8,q:"Solve: x/2 = 6, x = ?",o:["3","6","12","18"],a:2},
  {c:8,q:"If 2x + 3 = 9, then x = ?",o:["2","3","4","5"],a:1},
  {c:8,q:"The solution of x - 7 = 0 is:",o:["0","7","-7","1"],a:1},
  {c:8,q:"Solve: 4x = 20, x = ?",o:["4","5","6","8"],a:1},
  // Chapter 9 - Fundamentals of Geometry
  {c:9,q:"A line segment has:",o:["No endpoints","One endpoint","Two endpoints","Infinite endpoints"],a:2},
  {c:9,q:"The sum of angles in a triangle is:",o:["90\u00B0","180\u00B0","270\u00B0","360\u00B0"],a:1},
  {c:9,q:"An angle of exactly 90\u00B0 is called a/an:",o:["Acute angle","Right angle","Obtuse angle","Straight angle"],a:1},
  {c:9,q:"Two lines that never meet are called:",o:["Intersecting","Parallel","Perpendicular","Congruent"],a:1},
  {c:9,q:"A triangle with all sides equal is called:",o:["Scalene","Isosceles","Equilateral","Right-angled"],a:2},
  {c:9,q:"An angle greater than 90\u00B0 but less than 180\u00B0 is:",o:["Acute","Obtuse","Right","Reflex"],a:1},
  {c:9,q:"Lines that meet at exactly 90\u00B0 are called:",o:["Parallel","Perpendicular","Intersecting","Skew"],a:1},
  {c:9,q:"A polygon with 4 sides is called a:",o:["Triangle","Pentagon","Quadrilateral","Hexagon"],a:2},
  // Chapter 10 - Practical Geometry
  {c:10,q:"To construct a triangle, we generally need at least:",o:["1 measurement","2 measurements","3 measurements","4 measurements"],a:2},
  {c:10,q:"The instrument used to draw circles is a:",o:["Ruler","Compass","Protractor","Set square"],a:1},
  {c:10,q:"To bisect an angle means to divide it into:",o:["3 equal parts","2 equal parts","4 equal parts","Unequal parts"],a:1},
  {c:10,q:"A protractor is used to measure:",o:["Length","Angles","Area","Volume"],a:1},
  {c:10,q:"A perpendicular bisector of a line divides it into:",o:["2 equal parts at 90\u00B0","3 parts","Unequal parts","None of these"],a:0},
  {c:10,q:"To construct an equilateral triangle, it is enough to know:",o:["One side","Two sides only","Three angles only","None of these"],a:0},
  {c:10,q:"A set-square commonly has angles of:",o:["30-60-90","40-50-90","20-70-90","45-45-100"],a:0},
  {c:10,q:"The point where two arcs intersect while constructing a triangle gives the:",o:["Midpoint","Third vertex","Center","Angle bisector"],a:1},
  // Chapter 11 - Circumference, Area and Volume
  {c:11,q:"The circumference of a circle is given by:",o:["\u03C0r\u00B2","2\u03C0r","\u03C0d\u00B2","2\u03C0r\u00B2"],a:1},
  {c:11,q:"The area of a circle is given by:",o:["2\u03C0r","\u03C0r\u00B2","\u03C0d","2\u03C0r\u00B2"],a:1},
  {c:11,q:"The volume of a cube with side 3 cm is:",o:["9 cm\u00B3","18 cm\u00B3","27 cm\u00B3","81 cm\u00B3"],a:2},
  {c:11,q:"The area of a rectangle is given by:",o:["l + b","l \u00D7 b","2(l+b)","l / b"],a:1},
  {c:11,q:"The volume of a cuboid is given by:",o:["l \u00D7 b","l \u00D7 b \u00D7 h","l + b + h","2(l+b+h)"],a:1},
  {c:11,q:"If radius = 7 cm (\u03C0 = 22/7), the circumference is:",o:["22 cm","44 cm","66 cm","14 cm"],a:1},
  {c:11,q:"The perimeter of a square with side 5 cm is:",o:["10 cm","15 cm","20 cm","25 cm"],a:2},
  {c:11,q:"The volume of a cube is given by:",o:["side\u00B2","side\u00B3","3 \u00D7 side","6 \u00D7 side\u00B2"],a:1},
  // Chapter 12 - Information Handling
  {c:12,q:"The average of 2, 4, 6, 8 is:",o:["4","5","6","20"],a:1},
  {c:12,q:"A pie chart represents data in the form of:",o:["Bars","Circle sectors","Lines","Dots"],a:1},
  {c:12,q:"The middle value in an ordered data set is called the:",o:["Mean","Median","Mode","Range"],a:1},
  {c:12,q:"The value that occurs most frequently in data is called the:",o:["Mean","Median","Mode","Range"],a:2},
  {c:12,q:"Range of a data set is calculated as:",o:["Highest - Lowest","Highest + Lowest","Sum / count","Highest \u00D7 Lowest"],a:0},
  {c:12,q:"A bar graph is best used to represent:",o:["Continuous data only","Discrete / categorical data","Only decimals","None of these"],a:1},
  {c:12,q:"The sum of all observations divided by their number is the:",o:["Mode","Median","Mean","Range"],a:2},
  {c:12,q:"In a pie chart, the total angle around the center is:",o:["180\u00B0","270\u00B0","360\u00B0","90\u00B0"],a:2},
];
QUESTION_BANK.forEach((qq, i) => qq.id = i);

/* ---------- 2. Paper Definitions ---------- */
const PAPERS = [
  { id: 1, kind: "chapter", title: "Paper 1 — Number System",         chapters: [1,2,3],  count: 20 },
  { id: 2, kind: "chapter", title: "Paper 2 — Ratio, Proportion & Finance", chapters: [4,5], count: 16 },
  { id: 3, kind: "chapter", title: "Paper 3 — Algebra",                chapters: [6,7],    count: 16 },
  { id: 4, kind: "chapter", title: "Paper 4 — Equations & Geometry Basics", chapters: [8,9], count: 16 },
  { id: 5, kind: "chapter", title: "Paper 5 — Practical Geometry, Mensuration & Data", chapters: [10,11,12], count: 20 },
  { id: 6, kind: "full", title: "Paper 6 — Full Syllabus Test 1", count: 50 },
  { id: 7, kind: "full", title: "Paper 7 — Full Syllabus Test 2", count: 50 },
  { id: 8, kind: "full", title: "Paper 8 — Full Syllabus Test 3", count: 50 },
  { id: 9, kind: "full", title: "Paper 9 — Full Syllabus Test 4", count: 50 },
  { id: 10, kind: "full", title: "Paper 10 — Full Syllabus Test 5", count: 50 },
];

function chapterNamesFor(ids){
  return ids.map(id => CHAPTERS.find(c=>c.id===id).name).join(", ");
}

/* ---------- 3. State ---------- */
let state = {
  currentPaper: null,
  student: { name: "", roll: "", school: "" },
  questions: [],   // shuffled questions for current attempt
  answers: [],     // selected option index per question, -1 = unanswered
  lastResult: null,
};

const HISTORY_KEY = "pec8_math_history_v1";

/* ---------- 4. Utilities ---------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=>t.classList.remove("show"), 2200);
}
function fmtDate(d){
  return d.toLocaleDateString(undefined,{day:"2-digit",month:"short",year:"numeric"}) + " " +
         d.toLocaleTimeString(undefined,{hour:"2-digit",minute:"2-digit"});
}
function saveHistory(entry){
  const list = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  list.unshift(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0,100)));
}
function loadHistory(){
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
}

/* ---------- 5. Navigation ---------- */
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("screen-"+id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  if(id==="home") document.getElementById("navHome").classList.add("active");
  if(id==="history"){ document.getElementById("navHistory").classList.add("active"); renderHistory(); }
  if(id==="about"){ document.getElementById("navAbout").classList.add("active"); }
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-nav]").forEach(el=>{
  el.addEventListener("click", ()=> showScreen(el.dataset.nav));
});

/* ---------- 6. Render paper listing ---------- */
function renderPapers(){
  const chapWrap = document.getElementById("chapterPapers");
  const fullWrap = document.getElementById("fullPapers");
  chapWrap.innerHTML = "";
  fullWrap.innerHTML = "";
  PAPERS.forEach(p=>{
    const card = document.createElement("div");
    card.className = "paper-card" + (p.kind==="full" ? " full" : "");
    const chapText = p.kind==="chapter" ? chapterNamesFor(p.chapters) : "All 12 chapters (Full Syllabus)";
    card.innerHTML = `
      <span class="p-no">${p.kind==="chapter"?"CHAPTER-WISE":"FULL SYLLABUS"}</span>
      <span class="p-title">${p.title}</span>
      <span class="p-chaps">${chapText}</span>
      <span class="p-foot"><span>${p.count} MCQs</span><span>100 marks</span></span>
    `;
    card.addEventListener("click", ()=> startPaperFlow(p));
    (p.kind==="chapter"?chapWrap:fullWrap).appendChild(card);
  });
}

/* ---------- 7. Chapter list (about screen) ---------- */
function renderChapterList(){
  const ol = document.getElementById("chapterListView");
  ol.innerHTML = CHAPTERS.map(c=>`<li>${c.name}</li>`).join("");
}

/* ---------- 8. Start paper -> student info ---------- */
function startPaperFlow(paper){
  state.currentPaper = paper;
  document.getElementById("infoPaperTitle").textContent = paper.title + " · " + paper.count + " MCQs · 100 marks";
  showScreen("info");
}

document.getElementById("studentForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  state.student.name = document.getElementById("stuName").value.trim();
  state.student.roll = document.getElementById("stuRoll").value.trim();
  state.student.school = document.getElementById("stuSchool").value.trim() || "GHS 124/NB";
  buildAndStartExam(state.currentPaper);
});

/* ---------- 9. Build exam questions ---------- */
function buildAndStartExam(paper){
  let pool;
  if(paper.kind === "chapter"){
    pool = QUESTION_BANK.filter(q => paper.chapters.includes(q.c));
    pool = shuffle(pool);
    // fill up to count, repeating (cycling) if pool smaller than needed
    let selected = [];
    while(selected.length < paper.count){
      selected = selected.concat(pool);
    }
    state.questions = shuffle(selected.slice(0, paper.count));
  } else {
    pool = shuffle(QUESTION_BANK);
    state.questions = pool.slice(0, paper.count);
  }
  state.answers = new Array(state.questions.length).fill(-1);
  renderExam();
  showScreen("exam");
}

/* ---------- 10. Render exam ---------- */
function renderExam(){
  const paper = state.currentPaper;
  document.getElementById("examPaperTitle").textContent = paper.title;
  document.getElementById("examMeta").textContent = " · " + state.questions.length + " MCQs · 100 marks · Pass 33%";
  const list = document.getElementById("questionList");
  list.innerHTML = "";
  state.questions.forEach((q, idx)=>{
    const block = document.createElement("div");
    block.className = "q-block";
    const chName = CHAPTERS.find(c=>c.id===q.c).name;
    block.innerHTML = `
      <span class="q-num-chip">Q${idx+1}</span><span class="q-chapter-chip">${chName}</span>
      <div class="q-text">${q.q}</div>
      <div class="q-options" data-qidx="${idx}">
        ${q.o.map((opt,oi)=>`
          <div class="q-option" data-oi="${oi}">
            <span class="opt-letter">${String.fromCharCode(65+oi)}</span>
            <span>${opt}</span>
          </div>`).join("")}
      </div>
    `;
    list.appendChild(block);
  });
  list.querySelectorAll(".q-options").forEach(optWrap=>{
    optWrap.addEventListener("click",(e)=>{
      const optEl = e.target.closest(".q-option");
      if(!optEl) return;
      const qidx = Number(optWrap.dataset.qidx);
      const oi = Number(optEl.dataset.oi);
      state.answers[qidx] = oi;
      optWrap.querySelectorAll(".q-option").forEach(o=>o.classList.remove("selected"));
      optEl.classList.add("selected");
      updateExamProgress();
    });
  });
  updateExamProgress();
}
function updateExamProgress(){
  const total = state.questions.length;
  const answered = state.answers.filter(a=>a!==-1).length;
  document.getElementById("examProgressText").textContent = `${answered} / ${total} answered`;
  document.getElementById("progressFill").style.width = (answered/total*100)+"%";
  document.getElementById("answeredCount").textContent = `${answered} of ${total} answered`;
}

document.getElementById("submitPaperBtn").addEventListener("click", ()=>{
  const total = state.questions.length;
  const answered = state.answers.filter(a=>a!==-1).length;
  if(answered < total){
    if(!confirm(`You have answered ${answered} of ${total} questions. Submit anyway?`)) return;
  }
  computeResult();
});

/* ---------- 11. Compute result ---------- */
function computeResult(){
  const total = state.questions.length;
  let correct = 0;
  state.questions.forEach((q,idx)=>{ if(state.answers[idx]===q.a) correct++; });
  const marksObtained = Math.round((correct/total*100) * 100) / 100; // exact scaling to 100
  const percentage = marksObtained; // out of 100 already
  const pass = percentage >= 33;

  const result = {
    name: state.student.name,
    roll: state.student.roll,
    school: state.student.school,
    paperTitle: state.currentPaper.title,
    date: new Date().toISOString(),
    total, correct,
    marksObtained, percentage, pass,
    questions: state.questions.map((q,idx)=>({
      q: q.q, o: q.o, a: q.a, chosen: state.answers[idx]
    }))
  };
  state.lastResult = result;
  saveHistory({
    name: result.name, roll: result.roll, school: result.school,
    paperTitle: result.paperTitle, date: result.date,
    marksObtained: result.marksObtained, percentage: result.percentage, pass: result.pass
  });
  renderResult(result);
  showScreen("result");
}

/* ---------- 12. Render result card ---------- */
function renderResult(r){
  document.getElementById("msSchool").textContent = r.school;
  document.getElementById("msName").textContent = r.name;
  document.getElementById("msRoll").textContent = r.roll;
  document.getElementById("msPaper").textContent = r.paperTitle;
  document.getElementById("msDate").textContent = fmtDate(new Da
