using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class School
    {
        public School()
        {
            CoachDetail = new HashSet<CoachDetail>();
            SchoolDetail = new HashSet<SchoolDetail>();
            SchoolTournamentDetail = new HashSet<SchoolTournamentDetail>();
            StudentDetail = new HashSet<StudentDetail>();
        }

        [Column("SchoolID")]
        public int SchoolId { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        [Column("CountyID")]
        public int? CountyId { get; set; }
        public string Name { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }

        [ForeignKey("CountyId")]
        [InverseProperty("School")]
        public County County { get; set; }
        [InverseProperty("School")]
        public ICollection<CoachDetail> CoachDetail { get; set; }
        [InverseProperty("School")]
        public ICollection<SchoolDetail> SchoolDetail { get; set; }
        [InverseProperty("School")]
        public ICollection<SchoolTournamentDetail> SchoolTournamentDetail { get; set; }
        [InverseProperty("School")]
        public ICollection<StudentDetail> StudentDetail { get; set; }
    }
}
