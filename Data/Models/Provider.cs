using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HighRiskProviders_Application.Data.Models
{
    public class Provider
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string RazonSocial { get; set; } = "RazonSocial";

        [Required]
        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string NombreComercial { get; set; } = "NombreComercial";

        [Required]
        [MaxLength(12), Column(TypeName = "nvarchar(12)")]
        public string IdentificacionTributaria { get; set; } = "IdentificacionTributaria";

        [Required]
        [MaxLength(50), Column(TypeName = "nvarchar(50)")]
        public string NumeroTelefonico { get; set; } = "NumeroTelefonico";

        [Required]
        [MaxLength(350), Column(TypeName = "nvarchar(350)")]
        public string CorreoElectronico { get; set; } = "CorreoElectronico";

        [Required]
        [MaxLength(2083), Column(TypeName = "nvarchar(2083)")]
        public string SitioWeb { get; set; } = "SitioWeb";

        [Required]
        [MaxLength(300), Column(TypeName = "nvarchar(300)")]
        public string DireccionFisica { get; set; } = "DireccionFisica";

        [Required]
        [MaxLength(100), Column(TypeName = "nvarchar(100)")]
        public string Pais { get; set; } = "Pais";

        [Required]
        [Column(TypeName = "decimal(18, 2)")]
        [DisplayFormat(DataFormatString = "{0:C}")]
        public decimal FacturacionAnual { get; set; } = 0.0m;

        public DateTime FechaCreacion { get; set; } = DateTime.Now;

        public DateTime FechaEdicion {  get; set; } = DateTime.Now; 

    }
}
