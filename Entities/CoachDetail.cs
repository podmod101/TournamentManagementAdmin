using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class CoachDetail
    {
        [Column("CoachDetailID")]
        public int CoachDetailId { get; set; }
        public string CellPhone { get; set; }
        public DateTime CreateDate { get; set; }
        public string Name { get; set; }
        [Column("SchoolID")]
        public int? SchoolId { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }

        [ForeignKey("SchoolId")]
        [InverseProperty("CoachDetail")]
        public School School { get; set; }
    }
}
