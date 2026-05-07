const courses = [
    { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, completed: true, category: "WDD" },
    { code: "WDD231", name: "Web Frontend Development I", credits: 3, completed: false, category: "WDD" },
    { code: "CSE110", name: "Programming Building Blocks", credits: 3, completed: true, category: "CSE" },
    { code: "CSE111", name: "Programming with Functions", credits: 3, completed: false, category: "CSE" },
    { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true, category: "WDD" }
];

function displayCourses(filterCategory = "All") {
    let filteredCourses = courses;
    if (filterCategory !== "All") {
        filteredCourses = courses.filter(course => course.category === filterCategory);
    }
    
    const container = document.getElementById('courseCards');
    container.innerHTML = "";
    
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        if (course.completed) {
            card.classList.add('completed');
        }
        card.innerHTML = `<strong>${course.code}</strong><br>${course.name}<br>Credits: ${course.credits}`;
        container.appendChild(card);
    });
    
    // Total credits using reduce
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').innerHTML = `Total Credits: ${total}`;
}

// Event listeners
document.getElementById('allBtn').addEventListener('click', () => displayCourses("All"));
document.getElementById('wddBtn').addEventListener('click', () => displayCourses("WDD"));
document.getElementById('cseBtn').addEventListener('click', () => displayCourses("CSE"));

// Initial load
displayCourses("All");
