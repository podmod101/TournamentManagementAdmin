using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class ShootDay
    {
        public ShootDay()
        {
            SchoolTournamentDetail = new HashSet<SchoolTournamentDetail>();
        }

        [Column("ShootDayID")]
        public int ShootDayId { get; set; }
        public string Name { get; set; }

        [InverseProperty("ShootDay")]
        public ICollection<SchoolTournamentDetail> SchoolTournamentDetail { get; set; }
    }
}
