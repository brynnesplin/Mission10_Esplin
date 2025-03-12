using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Mission10_Esplin.Data;

public partial class BowlerDbContext : DbContext
{
    public BowlerDbContext()
    {
    }

    public BowlerDbContext(DbContextOptions<BowlerDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bowler> Bowlers { get; set; }

    public virtual DbSet<Team> Teams { get; set; }
}