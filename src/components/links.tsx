import { useTranslations } from 'next-intl';

const Links = () => {
  const t = useTranslations('about-page.links');

  const linkbox = [
    {
      name: 'GitHub',
      link: 'https://github.com/DarioPTWR',
      description: t('github'),
      svg: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-indigo-500">
          <title>GitHub</title>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.58 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.774.418-1.305.762-1.606-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.235-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.487 11.487 0 013.003-.404 11.5 11.5 0 013.003.404c2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.768.839 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.479 5.921.429.37.814 1.102.814 2.222 0 1.606-.014 2.899-.014 3.293 0 .322.216.694.825.577C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/darioprawara/',
      description: t('instagram'),
      svg: (
        <svg
        role="img"
        viewBox="0 0 16 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="text-indigo-500">
        <title>Instagram</title>
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
         </svg>  
      ),
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@darioprawarateh',
      description: t('medium'),
      svg: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 24"
            role="img"
            fill="currentColor"
            className="text-indigo-500"
            >
            <title>Medium</title>
            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/dariopteh/',
      description: t('linkedin'),
      svg: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            fill="currentColor"
            className="text-indigo-500"
            >
            <title>LinkedIn</title>
            <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.64a2.033 2.033 0 01-2.06-2.05c0-1.134.922-2.05 2.06-2.05s2.06.916 2.06 2.05a2.034 2.034 0 01-2.06 2.05zM20.451 20.452h-3.5v-5.648c0-1.347-.028-3.078-1.876-3.078-1.876 0-2.164 1.464-2.164 2.973v5.753h-3.5V9h3.363v1.561h.047c.468-.88 1.61-1.807 3.317-1.807 3.547 0 4.2 2.335 4.2 5.37v6.327z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {linkbox.map((tool) => (
        <a
          key={tool.name}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-6 rounded-lg hover:text-indigo-500"
          style={{ textDecoration: 'none' }}>
          <div className="relative h-6 w-6">
            {tool.svg}
          </div>
          <div className="flex w-full flex-col mx-2">
            <h2 className="font-semibold">{tool.name}</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-[#c2c2c2]">
              {tool.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Links;
