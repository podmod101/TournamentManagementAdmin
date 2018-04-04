using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentManagementAdmin.Entities
{
    public partial class Division
    {
        public Division()
        {
            SchoolDetail = new HashSet<SchoolDetail>();
        }

        [Column("DivisionID")]
        public int DivisionId { get; set; }
        public string Name { get; set; }

        [InverseProperty("Division")]
        public ICollection<SchoolDetail> SchoolDetail { get; set; }
    }
}
