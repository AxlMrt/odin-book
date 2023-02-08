namespace UsersApi.Models
{
  public class User
  {
    public Guid Id { get; init; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public DateTime Birth { get; set; }
    public string Gender { get; set; }

    public User(string firstName, string lastName, string email, string birth, string gender)
    {
      this.Id = Guid.NewGuid();
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Email = email;
      this.Birth = DateTime.ParseExact(birth, "dd MM yyyy", null);
      this.Gender = gender;
    }
  }
}
