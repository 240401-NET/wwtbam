﻿using System;
using System.Collections.Generic;

namespace server;

public partial class Game
{
    public int GameId { get; set; }

    public int? UserId { get; set; }

    public int? Score { get; set; }

    public DateTime? PlayedAt { get; set; }

    public virtual User? User { get; set; }
}