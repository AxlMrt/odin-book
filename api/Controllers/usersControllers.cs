using UsersApi.Models;

namespace UsersApi.Controllers
{
  using Microsoft.AspNetCore.Mvc;

  [Route("api/[controller]")]
  [ApiController]

  public class UserController : ControllerBase
  {
    private static List<User> usersList = new()
    {
      new User("Axel", "Martin", "axel@axel.fr", "05 04 1994", "Homme"),
      new User("Marie-Anne", "Claudepierre", "marianne@claudepierre.fr", "02 10 1998", "Femme"),
      new User("Brice", "Martin", "brice@martin.fr", "12 05 1998", "Autre"),
      new User("Michele", "Martin", "michele@michele.fr", "01 02 1955", "Femme"),
      new User("Bruno", "Martin", "bruno@bruno.fr", "25 02 1965", "Homme"),
    };

    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAllUsers()
    {
      return Ok(usersList);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<List<User>>> GetSingleUser(Guid id)
    {
      var result = usersList.Find(user => user.Id == id);
      if (result is null)
        return NotFound("User not found.");
      return Ok(result);
    }
    
    [HttpPost]
    public async Task<ActionResult<List<User>>> AddUser(User user)
    {
      usersList.Add(user);
      return usersList;
    }

    [HttpPut]
    public async Task<ActionResult<List<User>>> UpdateUser(User req)
    {
      var result = usersList.Find(user => user.Id == req.Id);
      if (result is null)
        return NotFound("User not found");

      result.FirstName = req.FirstName;
      result.LastName = req.LastName;
      result.Email = req.Email;
      result.Birth = req.Birth;
      result.Gender = req.Gender;

      return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<User>>> DeleteUser(Guid id)
    {
      var result = usersList.Find(user => user.Id == id);
      if (result is null)
        return NotFound("User not found");

      usersList.Remove(result);
      return Ok(result);
    }
  }
}