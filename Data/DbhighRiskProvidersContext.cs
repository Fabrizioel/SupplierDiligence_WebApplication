using System;
using System.Collections.Generic;
using HighRiskProviders_Application.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace HighRiskProviders_Application.Data;

public class DbhighRiskProvidersContext : DbContext
{

    public DbhighRiskProvidersContext(DbContextOptions<DbhighRiskProvidersContext> options) : base(options) { }

    public DbSet<Provider> Providers { get; set; }

}
