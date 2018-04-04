using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class Sector
    {
        public Sector()
        {
            SchoolDetail = new HashSet<SchoolDetail>();
        }

        [Column("SectorID")]
        public int SectorId { get; set; }
        public string Name { get; set; }

        [InverseProperty("Sector")]
        public ICollection<SchoolDetail> SchoolDetail { get; set; }
    }
}
