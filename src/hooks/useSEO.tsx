import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const useSEO = ({ title, description, keywords, ogImage }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | BeaconTrust - Trusted Real Estate Solutions in Kenya`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords && keywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', `${title} | BeaconTrust`);
    }
    
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) {
      ogDescMeta.setAttribute('content', description);
    }
    
    // Update Twitter card
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', `${title} | BeaconTrust`);
    
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', description);
    
  }, [title, description, keywords, ogImage]);
};