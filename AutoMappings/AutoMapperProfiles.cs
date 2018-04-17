using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper.Mappers;
using AutoMapper.Configuration;
using AutoMapper;
using TournamentManagementAdmin.Entities;

namespace TournamentManagementAdmin.AutoMappings
{
	public class AutoMapperProfiles : Profile
	{
		public AutoMapperProfiles()
		{
			///*STUDENTS*/
			//CreateMap<Student_VM, Student>().ReverseMap();

			//CreateMap<Student_Detail_VM, StudentDetail>().ReverseMap();
			//CreateMap<Student_Detail_VM, Student>().ReverseMap();

			//CreateMap<Student_StudentDetail_VM, StudentDetail>()
			//	.ReverseMap();
			//CreateMap<Student_StudentDetail_VM, Student>()
			//	.ReverseMap();

			//CreateMap<StudentDetail, Student_Info_VM>()
			//	.ForMember(dst => dst.Student, src => src.MapFrom(sd => sd.Student))
			//	.ForMember(dst => dst.CountyName, src => src.MapFrom(c => c.County.Name))
			//	.ForMember(dst => dst.GradeName, src => src.MapFrom(g => g.Grade.Name))
			//	.ForMember(dst => dst.SchoolName, src => src.MapFrom(s => s.School.Name))
			//	.ReverseMap();

			//CreateMap<StudentTournamentDetail_VM, StudentTournamentDetail>().ReverseMap();


			///*SCHOOLS*/
			//CreateMap<School_VM, School>().ReverseMap();

			//CreateMap<School_Detail_VM, SchoolDetail>().ReverseMap();
			//CreateMap<School_Detail_VM, School>().ReverseMap();

			//CreateMap<School_SchoolDetail_VM, SchoolDetail>().ReverseMap();
			//CreateMap<School_SchoolDetail_VM, School>().ReverseMap();

			//CreateMap<SchoolTournamentDetail_VM, SchoolTournamentDetail>().ReverseMap();


			///*TOURNAMENT*/
			//CreateMap<Tournament_VM, Tournament>().ReverseMap();


			///*COACHES*/
			//CreateMap<Coach_Detail_VM, CoachDetail>().ReverseMap();

			//CreateMap<Coach_School_Registration_VM, CoachDetail>().ReverseMap();
			//CreateMap<Coach_School_Registration_VM, School>().ForMember(dest => dest.Name, src => src.MapFrom(sp => sp.SchoolName)).ReverseMap();
			//CreateMap<Coach_School_Registration_VM, SchoolDetail>().ReverseMap();
		}
	}
}