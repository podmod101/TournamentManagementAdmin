using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TournamentManagementAdmin.Entities;
using TournamentManagementAdmin.Models;
using Newtonsoft.Json;
using AutoMapper;
using TournamentManagementAdmin.AutoMappings;

namespace TournamentManagementAdmin
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

			//Mapper.Initialize(
			//	cfg =>
			//	{
			//		cfg.AddProfile<AutoMapperProfiles>();
			//	});
		}

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<AdminContext>(options =>
					options.UseSqlServer(Configuration
						["Data:AIMS:ConnectionString"]));



			services.AddMvc().AddJsonOptions(m => {
				m.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Serialize;
			});
		}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            app.UseWebpackDevMiddleware(new Microsoft.AspNetCore.SpaServices.Webpack.WebpackDevMiddlewareOptions() {
              HotModuleReplacement = true
            });

            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}
            //else
            //{
            //    app.UseExceptionHandler("/Home/Error");
            //}

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}


namespace Newtonsoft.Json.Serialization
{
	public class CustomContractResolver : Newtonsoft.Json.Serialization.DefaultContractResolver
	{
		protected override JsonProperty CreateProperty(System.Reflection.MemberInfo member, Newtonsoft.Json.MemberSerialization memberSerialization)
		{
			JsonProperty prop = base.CreateProperty(member, memberSerialization);

			if (//prop.DeclaringType != typeof(StudentRegistration) &&
				prop.PropertyType.IsClass &&
				prop.PropertyType != typeof(string))
			{
				prop.ShouldSerialize = obj => false;
			}

			return prop;
		}
	}

	public static class JSerializeSettings
	{
		public static Newtonsoft.Json.JsonSerializerSettings JsonSerializerSettings()
		{
			Newtonsoft.Json.JsonSerializerSettings settings = new Newtonsoft.Json.JsonSerializerSettings
			{
				ContractResolver = new CustomContractResolver(),
				PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.None,
				ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
				Formatting = Newtonsoft.Json.Formatting.Indented
			};

			return settings;
		}
	}

}
