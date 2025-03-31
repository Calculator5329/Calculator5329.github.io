import React from "react";
import {
  LocationIcon,
  OrganizationIcon,
  MarkGithubIcon,
  LinkIcon,
  GlobeIcon,
  MailIcon,
} from "@primer/octicons-react";

export default function ProfileLinks() {
  return (
    <div className="profile-info-grid">
      <InfoRow
        label="Based in:"
        value="Rochester, MN"
        icon={<LocationIcon size={16} />}
      />
      <InfoRow
        label="Organization:"
        value="Student @ WGU"
        icon={<OrganizationIcon size={16} />}
      />
      <InfoRow
        label="GitHub:"
        value={
          <a
            href="https://github.com/Calculator5329"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calculator5329
          </a>
        }
        icon={<MarkGithubIcon size={16} />}
      />
      <InfoRow
        label="LinkedIn:"
        value={
          <a
            href="https://www.linkedin.com/in/ethan-gates5329"
            target="_blank"
            rel="noopener noreferrer"
          >
            ethan-gates5329
          </a>
        }
        icon={<LinkIcon size={16} />}
      />
      <InfoRow
        label="Blog:"
        value={
          <a
            href="https://calculator5329.github.io/blog/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            calculator5329.github.io/blog
          </a>
        }
        icon={<GlobeIcon size={16} />}
      />
      <InfoRow
        label="Email:"
        value={
          <a href="mailto:ethangates5329@gmail.com">ethangates5329@gmail.com</a>
        }
        icon={<MailIcon size={16} />}
      />
    </div>
  );
}

function InfoRow({ label, value, icon }) {
  return (
    <div className="info-row">
      <div className="info-label">
        <span className="info-icon">{icon}</span>
        <span className="info-text">{label}</span>
      </div>
      <div className="info-value">{value}</div>
    </div>
  );
}
