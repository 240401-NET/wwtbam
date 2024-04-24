using System;
using System.Collections.Generic;

namespace server.Repository;

public partial class User
{
    public int UserId { get; set; }

    public string? Username { get; set; }

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();
}
