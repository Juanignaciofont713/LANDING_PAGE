const products = [
  {
    title: 'Streetwear Premium',
    description: 'Comodidad y actitud para cualquier día de la semana.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    alt: 'Streetwear premium outfit',
  },
  {
    title: 'Casual Chic',
    description: 'Diseños versátiles que van del día a la noche con estilo.',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
    alt: 'Casual chic clothing set',
  },
  {
    title: 'Básicos con actitud',
    description: 'Prendas esenciales que no sacrifican presencia ni calidad.',
    image:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80',
    alt: 'Basic fashion apparel',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">Nueva colección</span>
          <h1>Moda que define tu estilo.</h1>
          <p>
            Un espacio diseñado para marcas de ropa que buscan una presencia digital
            elegante, cercana y moderna.
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="button button-primary">Ver catálogo</a>
            <a href="#contacto" className="button button-secondary">Contáctanos</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-card">
            <span className="image-label">Lanzamiento</span>
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
              alt="Colección de moda"
            />
          </div>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Calidad premium</h2>
          <p>Materiales selectos, confección impecable y diseños que marcan tendencia.</p>
        </div>
        <div className="feature-card">
          <h2>Estilo único</h2>
          <p>Prendas pensadas para expresar personalidad en cada look.</p>
        </div>
        <div className="feature-card">
          <h2>Envíos rápidos</h2>
          <p>Entrega segura y rápida para que tus clientes disfruten su compra sin esperas.</p>
        </div>
      </section>

      <section id="catalogo" className="products">
        <div className="section-header">
          <span className="eyebrow">Tendencias</span>
          <h2>Modelos destacados</h2>
          <p>Explora los atuendos más populares que conectan con el estilo de tu marca.</p>
        </div>

          <div className="product-grid">
          {products.map((product) => (
            <article key={product.title} className="product-card">
              <img className="product-image" src={product.image} alt={product.alt} loading="lazy" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Haz que tu marca destaque</h2>
          <p>Diseñamos una landing page enfocada en convertir visitantes en clientes.</p>
        </div>
        <a href="#contacto" className="button button-primary">Solicita tu diseño</a>
      </section>

      <footer id="contacto" className="footer">
        <div>
          <h2>Contacto</h2>
          <p>Escríbenos para desarrollar tu landing page de ropa con presencia profesional.</p>
        </div>
        <div className="footer-info">
          <p>Email: hola@tu-moda.com</p>
          <p>Tel: +54 9 11 1234 5678</p>
        </div>
      </footer>
    </div>
  )
}

export default App
