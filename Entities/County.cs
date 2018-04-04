using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class County
    {
        public County()
        {
            School = new HashSet<School>();
            StudentDetail = new HashSet<StudentDetail>();
        }

        [Column("CountyID")]
        public int CountyId { get; set; }
        public string Name { get; set; }

        [InverseProperty("County")]
        public ICollection<School> School { get; set; }
        [InverseProperty("County")]
        public ICollection<StudentDetail> StudentDetail { get; set; }
    }
}
