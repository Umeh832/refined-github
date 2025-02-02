// Run `npm run vitest` to update these files
import importedFeaturesRaw from '../build/__snapshots__/imported-features.json' with {type: 'json'};
import featuresMetasRaw from '../build/__snapshots__/features-meta.json' with {type: 'json'};
import renamedFeatures from './feature-renames.json' with {type: 'json'};

export const importedFeatures = importedFeaturesRaw as FeatureID[];
export const featuresMeta = featuresMetasRaw as FeatureMeta[];

// eslint-disable-next-line unicorn/prefer-export-from -- The build silently fails to provide `renamedFeatures` in this scope. I don't know whose fault it is.
export {renamedFeatures};

export function getNewFeatureName(possibleFeatureName: string): FeatureID | undefined {
	// @ts-expect-error Useless "no index type" error as usual
	const newFeatureName = renamedFeatures[possibleFeatureName] as FeatureID ?? possibleFeatureName;
	return importedFeatures.includes(newFeatureName) ? newFeatureName : undefined;
}
