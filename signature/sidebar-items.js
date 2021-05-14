initSidebarItems({"struct":[["Error","Signature errors."]],"trait":[["DigestSigner","Sign the given prehashed message [`Digest`] using `Self`."],["DigestVerifier","Verify the provided signature for the given prehashed message [`Digest`] is authentic."],["PrehashSignature","Marker trait for `Signature` types computable as `𝐒(𝐇(𝒎))` i.e. ones which prehash a message to be signed as `𝐇(𝒎)`"],["RandomizedDigestSigner","Combination of [`DigestSigner`] and [`RandomizedSigner`] with support for computing a signature over a digest which requires entropy from an RNG."],["RandomizedSigner","Sign the given message using the provided external randomness source."],["Signature","Trait impl’d by concrete types that represent digital signatures."],["Signer","Sign the provided message bytestring using `Self` (e.g. a cryptographic key or connection to an HSM), returning a digital signature."],["Verifier","Verify the provided message bytestring using `Self` (e.g. a public key)"]]});