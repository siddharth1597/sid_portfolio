const Contact = (props) => {
  const { name, details, social_id } = props.contact;

  const contactItems = [
    {
      icon: 'fas fa-map-marker-alt',
      href: `https://www.google.com/maps/place/${encodeURIComponent(details.location)}`,
      label: details.location,
      external: true,
      title: 'View location on map',
    },
    {
      icon: 'fas fa-envelope',
      href: `mailto:${details.email}`,
      label: details.email,
      title: 'Send email',
    },
    {
      icon: 'fas fa-mobile-alt',
      href: `tel:${details.phone.replace(/\s/g, '')}`,
      label: details.phone,
      title: 'Call phone',
    },
  ];

  const socialItems = [
    {
      icon: 'fab fa-linkedin',
      href: `https://${social_id.linkedin}`,
      label: social_id.linkedin,
      external: true,
    },
  ];

  if (social_id.portfolio) {
    socialItems.push({
      icon: 'fas fa-globe',
      href: social_id.portfolio,
      label: social_id.portfolio.replace(/^https?:\/\//, ''),
      external: true,
    });
  }

  const renderItem = (item, key) => (
    <article key={key} className="resume-block block-row">
      <i className={`${item.icon} text-light block-icon`} aria-hidden="true"></i>
      <a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noreferrer' : undefined}
        className="text-light block-link text-decoration-none"
        title={item.title}
      >
        {item.label}
      </a>
    </article>
  );

  return (
    <section className="section-block" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="title-heading">{name}</h2>
      <div className="block-list">{contactItems.map((item, i) => renderItem(item, `c-${i}`))}</div>
      <h3 className="visually-hidden">Social links</h3>
      <div className="block-list mt-3">{socialItems.map((item, i) => renderItem(item, `s-${i}`))}</div>
    </section>
  );
};

export default Contact;
