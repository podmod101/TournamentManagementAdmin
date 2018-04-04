using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class SchoolTournamentDetail
    {
        [Column("SchoolTournamentDetailID")]
        public int SchoolTournamentDetailId { get; set; }
        public string Comment { get; set; }
        public DateTime CreateDate { get; set; }
        [Column("ShootDayID")]
        public int? ShootDayId { get; set; }
        public TimeSpan? ShootTime { get; set; }
        [Column("SchoolID")]
        public int? SchoolId { get; set; }
        [Column("TournamentID")]
        public int? TournamentId { get; set; }

        [ForeignKey("SchoolId")]
        [InverseProperty("SchoolTournamentDetail")]
        public School School { get; set; }
        [ForeignKey("ShootDayId")]
        [InverseProperty("SchoolTournamentDetail")]
        public ShootDay ShootDay { get; set; }
        [ForeignKey("TournamentId")]
        [InverseProperty("SchoolTournamentDetail")]
        public Tournament Tournament { get; set; }
    }
}
