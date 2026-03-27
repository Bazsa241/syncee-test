import companyLogo from '@app/assets/syncee-logo-300px.png';

type CompanyLogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const CompanyLogo = ({ width = 120, ...props }: CompanyLogoProps) => (
  <img src={companyLogo} alt="company logo" width={width} {...props} />
);
