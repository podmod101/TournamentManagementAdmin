using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class Level
    {
        public Level()
        {
            SchoolDetail = new HashSet<SchoolDetail>();
        }

        [Column("LevelID")]
        public int LevelId { get; set; }
        public string Name { get; set; }

        [InverseProperty("Level")]
        public ICollection<SchoolDetail> SchoolDetail { get; set; }
    }
}
