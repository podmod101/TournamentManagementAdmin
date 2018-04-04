using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class SchoolDetail
    {
        [Column("SchoolDetailID")]
        public int SchoolDetailId { get; set; }
        public DateTime CreateDate { get; set; }
        [Column("DivisionID")]
        public int? DivisionId { get; set; }
        [Column("LevelID")]
        public int? LevelId { get; set; }
        [Column("SchoolID")]
        public int? SchoolId { get; set; }
        [Column("SectorID")]
        public int? SectorId { get; set; }

        [ForeignKey("DivisionId")]
        [InverseProperty("SchoolDetail")]
        public Division Division { get; set; }
        [ForeignKey("LevelId")]
        [InverseProperty("SchoolDetail")]
        public Level Level { get; set; }
        [ForeignKey("SchoolId")]
        [InverseProperty("SchoolDetail")]
        public School School { get; set; }
        [ForeignKey("SectorId")]
        [InverseProperty("SchoolDetail")]
        public Sector Sector { get; set; }
    }
}
