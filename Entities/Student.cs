using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class Student
    {
        public Student()
        {
            StudentDetail = new HashSet<StudentDetail>();
            StudentTournamentDetail = new HashSet<StudentTournamentDetail>();
        }

        [Column("StudentID")]
        public int StudentId { get; set; }
        public string CustomerNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string FirstName { get; set; }
        public string Gender { get; set; }
        public string HuntingLicenseNumber { get; set; }
        [Column("LastFourSSN")]
        public int LastFourSsn { get; set; }
        public string LastName { get; set; }
        public string MiddleInitial { get; set; }

        [InverseProperty("Student")]
        public ICollection<StudentDetail> StudentDetail { get; set; }
        [InverseProperty("Student")]
        public ICollection<StudentTournamentDetail> StudentTournamentDetail { get; set; }
    }
}
