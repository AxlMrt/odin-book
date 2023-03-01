namespace UsersApi.Controllers
{
  using Microsoft.AspNetCore.Mvc;
  using UsersApi.Services.UsersService;

  [Route("api/[controller]")]
  [ApiController]

  public class UserController : ControllerBase
  {
    private readonly IUsersService _usersService;
    public UserController(IUsersService usersService)
    {
      _usersService = usersService;
    }

    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAllUsers()
    {
      return await _usersService.GetAllUsers();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<List<User>>> GetSingleUser(Guid id)
    {
      var result = await _usersService.GetSingleUser(id);
      if (result is null)
        return NotFound("User not found.");
    
      return Ok(result);
    }
    
    [HttpPost]
    public async Task<ActionResult<List<User>>> AddUser(User user)
    {
      var result = await _usersService.AddUser(user);
      return result;
    }

    [HttpPut]
    public async Task<ActionResult<List<User>>> UpdateUser(Guid id, User req)
    {
      var result = await _usersService.UpdateUser(id, req);
  
      if (result is null)
        return NotFound("User not found");

      return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<User>>> DeleteUser(Guid id)
    {
      var result = await _usersService.DeleteUser(id);
      if (result is null)
        return NotFound("User not found");

      return Ok(result);
    }
  }
}