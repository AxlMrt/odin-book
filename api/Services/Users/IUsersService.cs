namespace UsersApi.Services.UsersService
{
  public interface IUsersService
  {
    List<User> GetAllUsers();
    User GetSingleUser(Guid id);
    List<User> AddUser(User user);
    List<User> UpdateUser(User req);
    List<User> DeleteUser(Guid id);
  }
}