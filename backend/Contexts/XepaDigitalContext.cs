using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace backend.Domains
{
    public partial class XepaDigitalContext : DbContext
    {
        public XepaDigitalContext()
        {
        }

        public XepaDigitalContext(DbContextOptions<XepaDigitalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Endereco> Endereco { get; set; }
        public virtual DbSet<Produto> Produto { get; set; }
        public virtual DbSet<Receita> Receita { get; set; }
        public virtual DbSet<RegistroProduto> RegistroProduto { get; set; }
        public virtual DbSet<ReservaProduto> ReservaProduto { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Server=DESKTOP-LNH3DKI\\SQLEXPRESS; Database=XepaDigital; User Id=sa; Password=132 - fabiano(senai)
                // DESKTOP-DJ0P3UG - fabiano(casa)
                // DESKTOP-IN4K5BB - will (senai)
                // WILLIAM\\SQLEXPRESS; Database=XepaDigital; Trusted_Connection=True; - will (Casa)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-IN4K5BB\\SQLEXPRESS; Database=XepaDigital; User Id=sa; Password=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.HasKey(e => e.IdEndereco)
                    .HasName("PK__Endereco__0B7C7F172EC2BCAB");

                entity.Property(e => e.Bairro).IsUnicode(false);

                entity.Property(e => e.Cep).IsUnicode(false);

                entity.Property(e => e.Cidade).IsUnicode(false);

                entity.Property(e => e.Endereco1).IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Numero).IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Endereco)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Endereco__IdUsua__5165187F");
            });

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.HasKey(e => e.IdProduto)
                    .HasName("PK__Produto__2E883C23FA8F6964");

                entity.Property(e => e.DescricaoProduto).IsUnicode(false);

                entity.Property(e => e.ImgProduto).IsUnicode(false);

                entity.Property(e => e.NomeProduto).IsUnicode(false);

                entity.Property(e => e.Organico).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Receita>(entity =>
            {
                entity.HasKey(e => e.IdReceita)
                    .HasName("PK__Receita__27290E9A3067EF51");

                entity.Property(e => e.ImgReceita).IsUnicode(false);

                entity.Property(e => e.NomeReceita).IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Receita)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Receita__IdUsuar__5441852A");
            });

            modelBuilder.Entity<RegistroProduto>(entity =>
            {
                entity.HasKey(e => e.IdRegistro)
                    .HasName("PK__Registro__FFA45A99897F595C");

                entity.HasOne(d => d.IdProdutoNavigation)
                    .WithMany(p => p.RegistroProduto)
                    .HasForeignKey(d => d.IdProduto)
                    .HasConstraintName("FK__RegistroP__IdPro__571DF1D5");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.RegistroProduto)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__RegistroP__IdUsu__5812160E");
            });

            modelBuilder.Entity<ReservaProduto>(entity =>
            {
                entity.HasKey(e => e.IdReserva)
                    .HasName("PK__ReservaP__0E49C69D02D6C09C");

                entity.Property(e => e.Situacao).IsUnicode(false);

                entity.HasOne(d => d.IdRegistroNavigation)
                    .WithMany(p => p.ReservaProduto)
                    .HasForeignKey(d => d.IdRegistro)
                    .HasConstraintName("FK__ReservaPr__IdReg__5AEE82B9");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.ReservaProduto)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__ReservaPr__IdUsu__5BE2A6F2");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF971E4E49A8");

                entity.HasIndex(e => e.EmailUsuario)
                    .HasName("UQ__Usuario__59FA3B65CEDB2923")
                    .IsUnique();

                entity.Property(e => e.Documento).IsUnicode(false);

                entity.Property(e => e.EmailUsuario).IsUnicode(false);

                entity.Property(e => e.FazEntrega).HasDefaultValueSql("((0))");

                entity.Property(e => e.ImgPerfil).IsUnicode(false);

                entity.Property(e => e.NomeUsuario).IsUnicode(false);

                entity.Property(e => e.RazaoSocial).IsUnicode(false);

                entity.Property(e => e.ReceberNotif).HasDefaultValueSql("((0))");

                entity.Property(e => e.SenhaUsuario).IsUnicode(false);

                entity.Property(e => e.Telefone1).IsUnicode(false);

                entity.Property(e => e.Telefone2).IsUnicode(false);

                entity.Property(e => e.TipoUsuario).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
