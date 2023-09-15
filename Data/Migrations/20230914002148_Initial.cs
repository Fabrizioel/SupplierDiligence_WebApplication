using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HighRiskProviders_Application.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Providers",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RazonSocial = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    NombreComercial = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    IdentificacionTributaria = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    NumeroTelefonico = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CorreoElectronico = table.Column<string>(type: "nvarchar(350)", maxLength: 350, nullable: false),
                    SitioWeb = table.Column<string>(type: "nvarchar(2083)", maxLength: 2083, nullable: false),
                    DireccionFisica = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Pais = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    FacturacionAnual = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: false),
                    FechaEdicion = table.Column<DateTime>(type: "datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Providers", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Providers");
        }
    }
}
