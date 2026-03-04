class School
{
    schoolName = "ABC School";
    city = "Trichy";
    totalStudents = 1500;  //variable

    showDetails()
    {
        console.log("School Name: " + this.schoolName);
        console.log("Location: " + this.city)
    }

    studentCount()
    {
        console.log("Total Students: " + this.totalStudents)
    }
}

let s1 = new School();
s1.showDetails();
s1.studentCount();