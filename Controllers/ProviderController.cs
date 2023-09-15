using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HighRiskProviders_Application.Data;
using HighRiskProviders_Application.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Net.Http;
using System.Threading.Tasks;


namespace HighRiskProviders_Application.Controllers
{
    [Route("api/provider")]
    [ApiController]
    public class ProviderController : ControllerBase
    {
        private readonly DbhighRiskProvidersContext _context;

        public ProviderController(DbhighRiskProvidersContext context)
        {
            _context = context;
        }

        // GET: api/provider
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Provider>>> GetProviders()
        {
            // Verificar si la tabla existe
            if (_context.Providers == null)
            {
                return NotFound("Informacion no encontrada.");
            }

            // Retornar lista de proveedores
            return await _context.Providers.ToListAsync();
        }

        // GET: api/provider/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Provider>> GetProvider(int id)
        {
            // Verificar si la tabla existe
            if (_context.Providers == null)
            {
                return NotFound("Informacion no encontrada.");
            }

            // Obtener el primer proveedor que coincida con el ID
            var provider =  await _context.Providers.FirstAsync(e => e.ID == id);

            // Solo continuar si se obtiene un proveedor
            if (provider == null)
            {
                return NotFound("Proveedor con id " + id + "no encontrado.");
            }

            // Retornar proveedor
            return provider;
        }


        // POST: api/provider
        [HttpPost]
        public async Task<ActionResult<Provider>> CreateProvider(Provider provider)
        {
            // Verificar si la tabla existe
            if (_context.Providers == null)
            {
                return NotFound("Informacion no encontrada.");
            }

            try
            {
                // Insertar nuevo proveedor
                _context.Providers.Add(provider);

                // Guardar cambios en BD
                await _context.SaveChangesAsync();
            } catch (DbUpdateConcurrencyException e)
            {
                return BadRequest("No se pudo registrar al proveedor: " + e.Message);
            }

            return CreatedAtAction("GetProvider", new { id = provider.ID }, provider);
        }

        // PUT: api/provider/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProvider(int id, Provider provider)
        {
            // Verificar si los ID coinciden
            if (id != provider.ID)
            {
                return BadRequest("Se intenta modificar el proveedor equivocado.");
            }

            try
            {
                // Obtener el primer proveedor que coincida con el ID
                var entry_ = await _context.Providers.FirstAsync(e => e.ID == provider.ID);
                
                // Verificar y actualizar cada campo que no sea igual para evitar excepciones
                if (entry_?.RazonSocial != provider.RazonSocial)
                {
                    entry_.RazonSocial = provider.RazonSocial;
                }
                if (entry_?.NombreComercial != provider.NombreComercial)
                {
                    entry_.NombreComercial = provider.NombreComercial;
                }
                if (entry_?.IdentificacionTributaria != provider.IdentificacionTributaria)
                {
                    entry_.IdentificacionTributaria = provider.IdentificacionTributaria;
                }
                if (entry_?.NumeroTelefonico != provider.NumeroTelefonico)
                {
                    entry_.NumeroTelefonico = provider.NumeroTelefonico;
                }
                if (entry_?.CorreoElectronico != provider.CorreoElectronico)
                {
                    entry_.CorreoElectronico = provider.CorreoElectronico;
                }
                if (entry_?.SitioWeb != provider.SitioWeb)
                {
                    entry_.SitioWeb = provider.SitioWeb;
                }
                if (entry_?.DireccionFisica != provider.DireccionFisica)
                {
                    entry_.DireccionFisica = provider.DireccionFisica;
                }
                if (entry_?.Pais != provider.Pais)
                {
                    entry_.Pais = provider.Pais;
                }
                if (entry_?.FacturacionAnual != provider.FacturacionAnual)
                {
                    entry_.FacturacionAnual = provider.FacturacionAnual;
                }

                // Nueva la fecha y hora de actualizacion
                entry_.FechaEdicion = DateTime.Now;

                // Guardar cambios en BD
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Verificar si un proveedor con ese ID existe
                if (!ProviderExists(id))
                {
                    return NotFound("Proveedor con id " + id + "no encontrado.");
                }
                else
                {
                    throw;
                }
            }

            return Ok("¡Proveedor actualizado exitosamente!");

        }

        // DELETE: api/provider/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProvider(int id)
        {
            // Verificar si la tabla existe
            if (_context.Providers == null)
            {
                return NotFound("Informacion no encontrada.");
            }
            
            // Obtener el primer proveedor que coincida con el ID
            var provider = await _context.Providers.FirstAsync(e => e.ID == id);

            // Solo continuar si se obtiene un proveedor
            if (provider == null)
            {
                return NotFound("Proveedor con id " + id + "no encontrado.");
            }
            
            // Eliminar proveedor
            _context.Providers.Remove(provider);

            // Guardar cambios en BD
            await _context.SaveChangesAsync();

            return Ok("¡Proveedor eliminado exitosamente!");
        }


        private bool ProviderExists(int id)
        {
            // Retornar "true" si un proveedor con ese ID existe
            return (_context.Providers?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
