namespace UsersApi.Models
{
  public class User
  {
    public Guid Id { get; init; } = Guid.NewGuid();
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public DateTime Birth { get; set; } 
    public string Gender { get; set; } = String.Empty;

/*     public User(string firstName, string lastName, string email, string birth, string gender)
    {
      this.Id = Guid.NewGuid();
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Email = email;
      this.Birth = DateTime.ParseExact(birth, "dd MM yyyy", null);
      this.Gender = gender;
    } */
  }
}
