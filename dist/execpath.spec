Name:       execpath
Version:    1
Release:    9
Summary:    execpath release
License:    FIXME

%description
This is the first RPM package

%prep


%build
yarn --frozen-lockfile
yarn pkg
mv execpath-linux execpath

%install
mkdir -p %{buildroot}/usr/bin/
install -m 755 execpath %{buildroot}/usr/bin/execpath

%files
/usr/bin/execpath

%changelog
# let's skip this for now