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

        public virtual DbSet<Colaborador> Colaborador { get; set; }
        public virtual DbSet<Endereco> Endereco { get; set; }
        public virtual DbSet<Produto> Produto { get; set; }
        public virtual DbSet<Receita> Receita { get; set; }
        public virtual DbSet<RegistroProduto> RegistroProduto { get; set; }
        public virtual DbSet<ReservaProduto> ReservaProduto { get; set; }
        public virtual DbSet<SobreProduto> SobreProduto { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-LNH3DKI\\SQLEXPRESS; Database=XepaDigital; User Id=sa; Password=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Colaborador>(entity =>
            {
                entity.HasKey(e => e.IdColaborador)
                    .HasName("PK__Colabora__3D2CA5123C9C4E35");

                entity.Property(e => e.DocumentoColab).IsUnicode(false);

                entity.Property(e => e.FazEntrega).HasDefaultValueSql("((0))");

                entity.Property(e => e.ImgPerfil).IsUnicode(false);

                entity.Property(e => e.RazaoSocial).IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Colaborador)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Colaborad__IdUsu__3F466844");
            });

            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.HasKey(e => e.IdEndereco)
                    .HasName("PK__Endereco__0B7C7F1778F50F60");

                entity.Property(e => e.Bairro).IsUnicode(false);

                entity.Property(e => e.Cep).IsUnicode(false);

                entity.Property(e => e.Cidade).IsUnicode(false);

                entity.Property(e => e.Endereco1).IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Numero).IsUnicode(false);
            });

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.HasKey(e => e.IdProduto)
                    .HasName("PK__Produto__2E883C237B774D4C");

                entity.Property(e => e.ImgProduto).IsUnicode(false);

                entity.Property(e => e.NomeProduto).IsUnicode(false);

                entity.HasOne(d => d.IdSobreProdutoNavigation)
                    .WithMany(p => p.Produto)
                    .HasForeignKey(d => d.IdSobreProduto)
                    .HasConstraintName("FK__Produto__IdSobre__44FF419A");
            });

            modelBuilder.Entity<Receita>(entity =>
            {
                entity.HasKey(e => e.IdReceita)
                    .HasName("PK__Receita__27290E9A48A325EA");

                entity.Property(e => e.ImgReceita).IsUnicode(false);

                entity.Property(e => e.NomeReceita).IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Receita)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Receita__IdUsuar__4BAC3F29");
            });

            modelBuilder.Entity<RegistroProduto>(entity =>
            {
                entity.HasKey(e => e.IdRegistro)
                    .HasName("PK__Registro__FFA45A9967950BCB");

                entity.HasOne(d => d.IdColaboradorNavigation)
                    .WithMany(p => p.RegistroProduto)
                    .HasForeignKey(d => d.IdColaborador)
                    .HasConstraintName("FK__RegistroP__IdCol__48CFD27E");

                entity.HasOne(d => d.IdProdutoNavigation)
                    .WithMany(p => p.RegistroProduto)
                    .HasForeignKey(d => d.IdProduto)
                    .HasConstraintName("FK__RegistroP__IdPro__47DBAE45");
            });

            modelBuilder.Entity<ReservaProduto>(entity =>
            {
                entity.HasKey(e => e.IdReserva)
                    .HasName("PK__ReservaP__0E49C69D804A322E");

                entity.HasOne(d => d.IdProdutoNavigation)
                    .WithMany(p => p.ReservaProduto)
                    .HasForeignKey(d => d.IdProduto)
                    .HasConstraintName("FK__ReservaPr__IdPro__4E88ABD4");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.ReservaProduto)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__ReservaPr__IdUsu__4F7CD00D");
            });

            modelBuilder.Entity<SobreProduto>(entity =>
            {
                entity.HasKey(e => e.IdSobreProduto)
                    .HasName("PK__SobrePro__F5A7575CA3334479");

                entity.Property(e => e.DescricaoProduto).IsUnicode(false);

                entity.Property(e => e.Preco).IsUnicode(false);

                entity.Property(e => e.Validade).IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97FFBF9CD5");

                entity.HasIndex(e => e.EmailUsuario)
                    .HasName("UQ__Usuario__59FA3B65B6D22349")
                    .IsUnique();

                entity.Property(e => e.EmailUsuario).IsUnicode(false);

                entity.Property(e => e.NomeUsuario).IsUnicode(false);

                entity.Property(e => e.ReceberNotif).HasDefaultValueSql("((0))");

                entity.Property(e => e.SenhaUsuario).IsUnicode(false);

                entity.Property(e => e.Telefone1).IsUnicode(false);

                entity.Property(e => e.Telefone2).IsUnicode(false);

                entity.Property(e => e.TipoUsuario).IsUnicode(false);

                entity.HasOne(d => d.IdEnderecoNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdEndereco)
                    .HasConstraintName("FK__Usuario__IdEnder__3B75D760");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
