using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class StudentDetail
    {
        [Column("StudentDetailID")]
        public int StudentDetailId { get; set; }
        [Column("CountyID")]
        public int? CountyId { get; set; }
        [Column("GradeID")]
        public int? GradeId { get; set; }
        [Column("SchoolID")]
        public int? SchoolId { get; set; }
        [Column("StudentID")]
        public int? StudentId { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public DateTime CreateDate { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }

        [ForeignKey("CountyId")]
        [InverseProperty("StudentDetail")]
        public County County { get; set; }
        [ForeignKey("GradeId")]
        [InverseProperty("StudentDetail")]
        public Grade Grade { get; set; }
        [ForeignKey("SchoolId")]
        [InverseProperty("StudentDetail")]
        public School School { get; set; }
        [ForeignKey("StudentId")]
        [InverseProperty("StudentDetail")]
        public Student Student { get; set; }
    }
}
