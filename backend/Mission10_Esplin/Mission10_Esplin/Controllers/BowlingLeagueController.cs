using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Esplin.Data;

namespace Mission10_Esplin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;
        public BowlingLeagueController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {

        var bowlerList = _bowlerContext.Bowlers
            .Include(b => b.Team).ToList();
            
            return (bowlerList);
        }
    }
}
