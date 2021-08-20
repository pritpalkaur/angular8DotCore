using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CustomerName { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string Country { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Gender { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string Age { get; set; }
    }
}
