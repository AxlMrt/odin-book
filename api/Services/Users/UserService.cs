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

    public List<User> AddUser(User user)
    {
      usersList.Add(user);
      return usersList;
    }

    public List<User> DeleteUser(Guid id)
    {
      var result = usersList.Find(user => user.Id == id);
      if (result is null)
        return null;

      usersList.Remove(result);
      return usersList;
    }

    public List<User> GetAllUsers()
    {
      return usersList;
    }

    public User GetSingleUser(Guid id)
    {
      var result = usersList.Find(user => user.Id == id);
      if (result is null)
        return null;

      return result;
    }

    public List<User> UpdateUser(User req)
    {
      var result = usersList.Find(user => user.Id == req.Id);

      result.FirstName = req.FirstName;
      result.LastName = req.LastName;
      result.Email = req.Email;
      result.Birth = req.Birth;
      result.Gender = req.Gender;

      return usersList;
    }
  }
}