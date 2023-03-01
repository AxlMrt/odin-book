namespace UsersApi.Services.UsersService
{
  public interface IUsersService
  {
    Task<List<User>> GetAllUsers();
    Task<User> GetSingleUser(Guid id);
    Task<List<User>> AddUser(User user);
    Task<List<User>> UpdateUser(Guid id, User req);
    Task<List<User>> DeleteUser(Guid id);
  }
}