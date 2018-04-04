using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TournamentManagementAdmin.Entities
{
    public partial class AdminContext : DbContext
    {
		public AdminContext(DbContextOptions<AdminContext> options) : base(options) { }

        public virtual DbSet<CoachDetail> CoachDetail { get; set; }
        public virtual DbSet<County> County { get; set; }
        public virtual DbSet<Division> Division { get; set; }
        public virtual DbSet<Grade> Grade { get; set; }
        public virtual DbSet<Level> Level { get; set; }
        public virtual DbSet<School> School { get; set; }
        public virtual DbSet<SchoolDetail> SchoolDetail { get; set; }
        public virtual DbSet<SchoolTournamentDetail> SchoolTournamentDetail { get; set; }
        public virtual DbSet<Sector> Sector { get; set; }
        public virtual DbSet<ShootDay> ShootDay { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<StudentDetail> StudentDetail { get; set; }
        public virtual DbSet<StudentTournamentDetail> StudentTournamentDetail { get; set; }
        public virtual DbSet<Tournament> Tournament { get; set; }

		//protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		//{
			//            if (!optionsBuilder.IsConfigured)
			//            {
			//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
			//                optionsBuilder.UseSqlServer(GetConnectionString("AIMS"));
			//            }
		//}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SchoolTournamentDetail>(entity =>
            {
                entity.Property(e => e.CreateDate).HasDefaultValueSql("('0001-01-01T00:00:00.000')");
            });

            modelBuilder.Entity<StudentDetail>(entity =>
            {
                entity.Property(e => e.CreateDate).HasDefaultValueSql("('0001-01-01T00:00:00.000')");
            });
        }
    }
}
