import { Helmet } from "react-helmet-async";
import { getBreadcrumbSchema } from "../utils/seoSchemas";
import { Link } from "react-router-dom";

/**
 * Breadcrumbs Component with Schema.org structured data
 * @param {Array} items - Array of {name: string, url: string} objects
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const schema = getBreadcrumbSchema(items);

  return (
    <>
      {schema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        </Helmet>
      )}
      
      <nav 
        aria-label="Breadcrumb" 
        className="mb-4"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li 
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index < items.length - 1 ? (
                <>
                  <Link
                    to={item.url}
                    className="hover:text-emerald-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <meta itemProp="position" content={index + 1} />
                  <span className="mx-2 text-gray-400" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <>
                  <span 
                    className="text-gray-900 font-semibold"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                  <meta itemProp="position" content={index + 1} />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

