namespace UsersApi.Services.UsersService
{
  public class UserService : IUsersService
  {
    private static List<User> usersList = new()
    {
      new User("Axel", "Martin", "axel@axel.fr", "05 04 1994", "Homme"),
      new User("Marie-Anne", "Claudepierre", "marianne@claudepierre.fr", "02 10 1998", "Femme"),
      new User("Brice", "Martin", "brice@martin.fr", "12 05 1998", "Autre"),
      new User("Michele", "Martin", "michele@michele.fr", "01 02 1955", "Femme"),
      new User("Bruno", "Martin", "bruno@bruno.fr", "25 02 1965", "Homme"),
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