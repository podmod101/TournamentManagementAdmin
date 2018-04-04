using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class Tournament
    {
        public Tournament()
        {
            SchoolTournamentDetail = new HashSet<SchoolTournamentDetail>();
            StudentTournamentDetail = new HashSet<StudentTournamentDetail>();
        }

        [Column("TournamentID")]
        public int TournamentId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTime EndDate { get; set; }
        public string Location { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public string State { get; set; }
        public bool StateChampionship { get; set; }
        public string Zip { get; set; }

        [InverseProperty("Tournament")]
        public ICollection<SchoolTournamentDetail> SchoolTournamentDetail { get; set; }
        [InverseProperty("Tournament")]
        public ICollection<StudentTournamentDetail> StudentTournamentDetail { get; set; }
    }
}
