using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class Grade
    {
        public Grade()
        {
            StudentDetail = new HashSet<StudentDetail>();
        }

        [Column("GradeID")]
        public int GradeId { get; set; }
        public string Name { get; set; }

        [InverseProperty("Grade")]
        public ICollection<StudentDetail> StudentDetail { get; set; }
    }
}
