using System;
namespace UsersApi.Services.UsersService
{
  public class UserService : IUsersService
  {
    private static List<User> usersList = new()
    {
      new User() { FirstName = "Axel", LastName = "Martin", Email = "axel@axel.fr", Birth = DateTime.ParseExact("05 04 1994", "d M yyyy", null), Gender = "Homme" },
      new User() { FirstName = "Marie-Anne", LastName = "Claudepierre", Email = "marianne@claudepierre.fr", Birth = DateTime.ParseExact("02 10 1998", "d M yyyy", null), Gender = "Femme" },
      new User() { FirstName = "Brice", LastName = "Martin", Email = "brice@martin.fr", Birth = DateTime.ParseExact("12 05 1998", "d M yyyy", null), Gender = "Autre" },
      new User() { FirstName = "Michele", LastName = "Martin", Email = "michele@michele.fr", Birth = DateTime.ParseExact("01 02 1955", "d M yyyy", null), Gender = "Femme" },
      new User() { FirstName = "Bruno", LastName = "Martin", Email = "bruno@bruno.fr", Birth = DateTime.ParseExact("25 02 1965", "d M yyyy", null), Gender = "Homme"},
    };

    private readonly DataContext _context;

    public UserService(DataContext context)
    {
      _context = context;
    }

    public async Task<List<User>> AddUser(User user)
    {
      _context.Users.Add(user);
      await _context.SaveChangesAsync();
      
      return await _context.Users.ToListAsync();
    }

    public async Task<List<User>> DeleteUser(Guid id)
    {
      var result = await _context.Users.FindAsync(id);
      if (result is null)
        return null;

      _context.Users.Remove(result);
      await _context.SaveChangesAsync();
      
      return await _context.Users.ToListAsync();
    }

    public async Task<List<User>> GetAllUsers()
    {
      var users = await _context.Users.ToListAsync();
      return users;
    }

    public async Task<User> GetSingleUser(Guid id)
    {
      var result = await _context.Users.FindAsync(id);
      if (result is null)
        return null;

      return result;
    }

    public async Task<List<User>> UpdateUser(Guid id, User req)
    {
      var result = await _context.Users.FindAsync(id);

      result.FirstName = req.FirstName;
      result.LastName = req.LastName;
      result.Email = req.Email;
      result.Birth = req.Birth;
      result.Gender = req.Gender;

      await _context.SaveChangesAsync();

      return await _context.Users.ToListAsync();
    }
  }
}