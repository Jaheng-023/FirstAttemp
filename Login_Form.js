document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('student-id').value;
    const department = document.getElementById('department').value;
    
    const studentDepartmentMapping = {
        '000000001': 'hr',
        '000000002': 'scm',
        '000000003': 'accounting',
        '202310070': 'marketing',
        '000000005': 'payroll'
    };

    if (studentDepartmentMapping[studentId] === department) {
        alert("Login successful! Redirecting...");
        window.location.href = department.charAt(0).toUpperCase() + department.slice(1) + '.html';
    } else {
        alert("You are from another department. Please Input Information Correctly");
    }
});
