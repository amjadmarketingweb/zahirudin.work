# Deployment guide — zahirudin.work

This site is published from the `main` branch of `amjadmarketingweb/zahirudin.work` using GitHub Actions and GitHub Pages. The production domain is exactly `zahirudin.work`.

## 1. Publish an update with GitHub Desktop

1. Open GitHub Desktop.
2. Select the repository **zahirudin.work**.
3. Confirm the current branch is **main**.
4. Review the changed files in the left panel. Do not include private files, temporary exports or credentials.
5. Enter a short, specific summary such as `Update portfolio content`.
6. Click **Commit to main**.
7. Click **Push origin**.
8. On GitHub, open the repository and select **Actions**.
9. Open the latest **Deploy Astro site to GitHub Pages** run and wait for both **Build** and **Deploy** to succeed.

If GitHub Desktop shows **Fetch origin** first, click it before committing so the local repository is aware of remote changes. If it reports a conflict, stop and resolve the conflict before pushing.

## 2. How automatic deployment works

The workflow at `.github/workflows/deploy-pages.yml` runs on every push to `main` and can also be started manually from the Actions tab.

It uses pnpm with a frozen lockfile, builds the static Astro site into `dist/`, uploads that directory as the GitHub Pages artifact, and deploys it to the `github-pages` environment. The workflow has only the GitHub token permissions Pages requires:

- `contents: read`
- `pages: write`
- `id-token: write`

Concurrent deployments share the `pages` group. An in-progress production deployment is not cancelled by a newer push.

## 3. GitHub Pages settings

In the GitHub repository:

1. Open **Settings**.
2. Select **Pages** under **Code and automation**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Under **Custom domain**, enter `zahirudin.work` without `https://` or a path.
5. Click **Save**.
6. Leave the deployment environment named `github-pages`.
7. In **Settings → Environments → github-pages**, allow only the `main` branch to deploy if an environment branch rule is available.

The repository includes `public/CNAME` because it is useful for domain portability and makes the intended production hostname explicit. For a custom GitHub Actions Pages workflow, GitHub treats the **Custom domain** field in repository settings as authoritative and does not require the `CNAME` file.

Until the custom domain is registered and active, the same build is available at the temporary project URL:

`https://amjadmarketingweb.github.io/zahirudin.work/`

The source uses GitHub Pages' generated base path, so navigation, images and downloads work at both the temporary project URL and the final custom domain.

### Domain registration prerequisite

Before continuing with domain verification or DNS, confirm that `zahirudin.work` appears in the NameSilo account and has authoritative nameservers. If public DNS returns `NXDOMAIN` or the `.work` registry has no record for the domain, it must be registered first. `zahirudin.work` is distinct from `zahiruddin.net`; do not substitute one for the other.

## 4. Verify ownership of the domain

Domain verification protects `zahirudin.work` and its immediate subdomains from being claimed by another GitHub account if this Pages site is ever disabled.

1. In GitHub, open the personal account settings for `amjadmarketingweb`.
2. Select **Pages**.
3. Click **Add a domain** and enter `zahirudin.work`.
4. GitHub will show a unique TXT record.
5. Add that TXT record in NameSilo exactly as GitHub provides it. Its host will normally resemble `_github-pages-challenge-amjadmarketingweb`.
6. Wait for it to resolve, then return to GitHub and click **Verify**.
7. Keep the verification TXT record permanently.

The verification TXT value is unique and must not be guessed or copied from another domain.

## 5. Configure DNS at NameSilo

NameSilo can manage these records only when the domain uses NameSilo nameservers. If the authoritative nameservers point elsewhere, make the changes at that DNS provider instead.

Open **NameSilo → Domain Manager → zahirudin.work → DNS Manager** and add these records:

| Name | Type | Address / Value |
| --- | --- | --- |
| `@` | `A` | `185.199.108.153` |
| `@` | `A` | `185.199.109.153` |
| `@` | `A` | `185.199.110.153` |
| `@` | `A` | `185.199.111.153` |
| `@` | `AAAA` | `2606:50c0:8000::153` |
| `@` | `AAAA` | `2606:50c0:8001::153` |
| `@` | `AAAA` | `2606:50c0:8002::153` |
| `@` | `AAAA` | `2606:50c0:8003::153` |
| `www` | `CNAME` | `amjadmarketingweb.github.io` |

Use NameSilo's default TTL unless there is a specific operational reason to change it.

Important:

- Do not create a CNAME at `@`; NameSilo does not support an apex CNAME or ALIAS/ANAME record.
- The `www` CNAME must point directly to `amjadmarketingweb.github.io`, not to `zahirudin.work`, a repository path, or a `*.pages.github.io` hostname.
- Do not include `https://` or a trailing path in a DNS value.
- Do not enable NameSilo's parking, URL forwarding or **Secure WWW Redirect** template. GitHub Pages handles the `www.zahirudin.work` to `zahirudin.work` redirect when both variants are configured correctly.

### Remove conflicting web records

Before waiting for certificate issuance, remove records that compete for the same host:

- old parking or hosting `A` records for `@`;
- non-GitHub `AAAA` records for `@`;
- any other `www` A, AAAA or CNAME record;
- wildcard records such as `*` that could claim subdomains.

Do not delete unrelated mail configuration. MX records, SPF/DKIM/DMARC TXT records, the GitHub verification TXT record and NameSilo's `_domainconnect` TXT record can remain.

## 6. Apex and www behavior

The canonical domain configured in GitHub is `zahirudin.work`. With the apex A/AAAA records and the `www` CNAME above, GitHub Pages will serve the apex and automatically redirect:

`www.zahirudin.work` → `zahirudin.work`

Both variants are configured because GitHub recommends the apex and `www` pair for HTTPS-secured websites.

## 7. Confirm DNS propagation

DNS changes may appear quickly but can take up to 24 hours. On Windows PowerShell, run:

```powershell
Resolve-DnsName zahirudin.work -Type A -Server 1.1.1.1
Resolve-DnsName zahirudin.work -Type AAAA -Server 1.1.1.1
Resolve-DnsName www.zahirudin.work -Type CNAME -Server 1.1.1.1
```

Expected results:

- the A lookup returns all four `185.199.*.153` GitHub Pages addresses;
- the AAAA lookup returns all four `2606:50c0:*::153` addresses;
- the CNAME lookup returns `amjadmarketingweb.github.io`.

Also check the DNS status beside the custom domain in **Repository Settings → Pages**. Test in a private browser window and on a second network before concluding that DNS has failed; computers and internet providers can temporarily cache old records.

## 8. Enable HTTPS

After GitHub shows a successful DNS check and finishes issuing the certificate:

1. Open **Repository Settings → Pages**.
2. Select **Enforce HTTPS**.
3. Test both `https://zahirudin.work` and `https://www.zahirudin.work`.

Certificate provisioning often completes within an hour, but GitHub advises allowing up to 24 hours after DNS changes. The site must not load CSS, JavaScript, images or fonts over plain `http://`, because mixed content can be blocked even when the page itself uses HTTPS.

## 9. Troubleshooting

### The workflow fails

- Open **Actions → Deploy Astro site to GitHub Pages** and inspect the first failed step.
- Confirm **Settings → Pages → Source** is **GitHub Actions**.
- Confirm `pnpm-lock.yaml` is committed and matches `package.json`.
- Run `pnpm install --frozen-lockfile` and `pnpm build` locally.
- Confirm the build creates `dist/`.
- Re-run the failed workflow after correcting the actual error.

### The custom domain shows a parking page or another host

- Remove old parking A records and any competing `www` record.
- Confirm the four GitHub A records and direct `www` CNAME.
- Confirm the domain uses the nameservers where the records were edited.
- Wait for cached DNS entries to expire.

### GitHub reports an incorrect DNS configuration

- Check the values with `Resolve-DnsName` against public resolver `1.1.1.1`.
- Confirm `www` does not point to the apex and does not contain the repository name.
- Remove wildcard DNS records.
- Confirm `zahirudin.work` is saved in the repository's Pages settings.

### The HTTPS certificate is pending

- Remove extra A/AAAA records for `@` and extra records for `www`.
- If the domain has CAA records, ensure at least one permits `letsencrypt.org`.
- Allow up to 24 hours after the final DNS correction.
- If DNS is correct but provisioning remains stuck, remove the custom domain in **Settings → Pages**, enter `zahirudin.work` again, and click **Save** to restart GitHub's certificate process.

### The browser still shows an old site

- Open a private/incognito window.
- Test on mobile data or another network.
- On Windows, run `ipconfig /flushdns`, then fully close and reopen the browser.
- Always test the HTTPS URL explicitly.

### Assets or internal routes return 404

- Check filename capitalization; GitHub's Linux environment is case-sensitive.
- Use root-relative paths or Astro-generated URLs instead of local disk paths.
- Confirm the Pages workflow passed the origin and base path to the Astro build.
- Confirm `public/` assets were copied into `dist/` during the build.

## 10. Go-live checklist

- [ ] Production build passes locally.
- [ ] Changes are committed and pushed to `main`.
- [ ] The latest GitHub Pages Action succeeds.
- [ ] Pages source is set to **GitHub Actions**.
- [ ] Custom domain is exactly `zahirudin.work`.
- [ ] The GitHub account-level domain verification is complete and its TXT record remains in DNS.
- [ ] Four A records and four AAAA records point the apex to GitHub Pages.
- [ ] `www` has one CNAME to `amjadmarketingweb.github.io`.
- [ ] Parking, forwarding, wildcard and other conflicting web records are removed.
- [ ] **Enforce HTTPS** is enabled.
- [ ] Apex and `www` work on desktop and mobile.
- [ ] Home, Ebooks, Contact, CV and external publication links work.
- [ ] `https://zahirudin.work/robots.txt` and `https://zahirudin.work/sitemap.xml` load successfully.

## Official references

- [GitHub: configuring a Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub: using custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub: managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub: verifying a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GitHub: securing Pages with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [GitHub: troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
- [NameSilo: DNS Manager](https://www.namesilo.com/support/v2/articles/domain-manager%2Fdns-manager)
- [NameSilo: root-domain CNAME guidance](https://www.namesilo.com/blog/en/dns/why-cant-i-add-a-cname-record-to-my-root-domain)
