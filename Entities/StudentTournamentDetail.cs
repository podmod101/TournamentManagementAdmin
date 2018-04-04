using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class StudentTournamentDetail
    {
        [Column("StudentTournamentDetailID")]
        public int StudentTournamentDetailId { get; set; }
        public DateTime CreateDate { get; set; }
        [Column("StudentID")]
        public int? StudentId { get; set; }
        [Column("TournamentID")]
        public int? TournamentId { get; set; }

        [ForeignKey("StudentId")]
        [InverseProperty("StudentTournamentDetail")]
        public Student Student { get; set; }
        [ForeignKey("TournamentId")]
        [InverseProperty("StudentTournamentDetail")]
        public Tournament Tournament { get; set; }
    }
}
